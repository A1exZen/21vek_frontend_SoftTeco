import { CloseOutlined } from '@ant-design/icons';
import { InputNumber, Slider } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import { useDebounce } from '@/hooks/useDebounce';
import { useGetBrands } from '@hooks/useProducts.ts';
import Button from '@components/ui/Button';

interface Filter {
  brand?: string;
  price_filtr?: 'asc' | 'desc';
  popular?: boolean;
  min_price?: number;
  max_price?: number;
}

interface FilterCardProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange: (filter: Filter) => void;
  currentFilter: Filter;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 10000;

export const FilterCard: React.FC<FilterCardProps> = ({
                                                        isOpen,
                                                        onClose,
                                                        onFilterChange,
                                                        currentFilter,
                                                      }) => {
  const [localFilter, setLocalFilter] = useState<Filter>({
    ...currentFilter,
    min_price: currentFilter.min_price ?? DEFAULT_MIN_PRICE,
    max_price: currentFilter.max_price ?? DEFAULT_MAX_PRICE,
  });
  const debouncedFilter = useDebounce(localFilter, 1000);
  const [showAllBrands, setShowAllBrands] = useState(false);

  const { data: brands } = useGetBrands();

  const currentMinPrice = localFilter.min_price ?? DEFAULT_MIN_PRICE;
  const currentMaxPrice = localFilter.max_price ?? DEFAULT_MAX_PRICE;

  const visibleBrands = useMemo(() => {
    if (!Array.isArray(brands)) return [];
    return showAllBrands ? brands : brands?.slice(0, 4);
  }, [brands, showAllBrands]);

  const hasHiddenBrands = useMemo(() => {
    return brands && brands.length > 4;
  }, [brands]);

  useEffect(() => {
    onFilterChange(debouncedFilter);
  }, [debouncedFilter, onFilterChange]);

  const handleBrandChange = (brand: string) => {
    setLocalFilter((prev) => ({
      ...prev,
      brand: prev.brand === brand ? undefined : brand,
    }));
  };

  const handleSortChange = (value: string) => {
    setLocalFilter((prev) => ({
      ...prev,
      price_filtr:
        value === 'price-asc'
          ? 'asc'
          : value === 'price-desc'
            ? 'desc'
            : undefined,
      popular: value === 'popular' ? true : undefined,
    }));
  };

  const handlePriceRangeChange = (value: number[]) => {
    const [min, max] = value;
    setLocalFilter((prev) => ({
      ...prev,
      min_price: min,
      max_price: max,
    }));
  };

  const handleMinPriceChange = (value: number | null) => {
    const newMinPrice = value === null || value < 0 ? DEFAULT_MIN_PRICE : value;
    const adjustedMaxPrice = Math.max(newMinPrice, currentMaxPrice);

    setLocalFilter((prev) => ({
      ...prev,
      min_price: newMinPrice,
      max_price: adjustedMaxPrice,
    }));
  };

  const handleMaxPriceChange = (value: number | null) => {
    const newMaxPrice = value === null || value < 0 ? DEFAULT_MIN_PRICE : value;
    const adjustedMinPrice = Math.min(currentMinPrice, newMaxPrice);

    setLocalFilter((prev) => ({
      ...prev,
      min_price: adjustedMinPrice,
      max_price: newMaxPrice,
    }));
  };

  const toggleShowAllBrands = () => {
    setShowAllBrands((prev) => !prev);
  };

  return (
    <aside
      className={`${styles['products__filters']} ${isOpen ? styles['products__filters--open'] : ''}`}
    >
      <div className={styles['filters__header']}>
        <h2 className={styles['filters__header-title']}>Фильтры</h2>
        <button
          className={styles['filters__close']}
          onClick={onClose}
          aria-label="Закрыть фильтры"
        >
          <CloseOutlined />
        </button>
      </div>

      <div className={styles['filters']}>
        <div className={styles['filters__section']}>
          <h3 className={styles['filters__title']}>Сортировка</h3>
          <select
            className={styles['filters__select']}
            value={
              localFilter.popular
                ? 'popular'
                : localFilter.price_filtr === 'asc'
                  ? 'price-asc'
                  : localFilter.price_filtr === 'desc'
                    ? 'price-desc'
                    : 'popular'
            }
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="popular">Сначала популярные</option>
            <option value="price-asc">По возрастанию цены</option>
            <option value="price-desc">По убыванию цены</option>
          </select>
        </div>

        <div className={styles['filters__section']}>
          <h3 className={styles['filters__title']}>Цена</h3>
          <div className={styles['filters__price-inputs']}>
            <InputNumber
              className={styles['filters__price-input']}
              value={currentMinPrice}
              min={DEFAULT_MIN_PRICE}
              max={DEFAULT_MAX_PRICE}
              onChange={handleMinPriceChange}
              placeholder="От"
            />
            <InputNumber
              className={styles['filters__price-input']}
              value={currentMaxPrice}
              min={DEFAULT_MIN_PRICE}
              max={DEFAULT_MAX_PRICE}
              onChange={handleMaxPriceChange}
              placeholder="До"
            />
          </div>
          <div className={styles['filters__price-slider']}>
            <Slider
              range
              min={DEFAULT_MIN_PRICE}
              max={DEFAULT_MAX_PRICE}
              step={20}
              value={[currentMinPrice, currentMaxPrice]}
              onChange={handlePriceRangeChange}
              tooltip={{
                formatter: (value) => `${value} р.`,
              }}
            />
          </div>
        </div>

        <div className={styles['filters__section']}>
          <div className={styles['filters__section-header']}>
            <h3 className={styles['filters__title']}>Производители</h3>
            {hasHiddenBrands && (
              <Button
                variant={'link'}
                onClick={toggleShowAllBrands}
                className={styles['filters__show-all']}
              >
                {showAllBrands ? 'Свернуть' : 'Показать все'}
              </Button>
            )}
          </div>
          <div className={styles['filters__checkbox-group']}>
            {visibleBrands?.map((brand) => (
              <label key={brand} className={styles['filters__checkbox']}>
                <input
                  type="checkbox"
                  checked={localFilter.brand === brand}
                  onChange={() => handleBrandChange(brand)}
                />
                <span className={styles['filters__checkbox-text']}>{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};