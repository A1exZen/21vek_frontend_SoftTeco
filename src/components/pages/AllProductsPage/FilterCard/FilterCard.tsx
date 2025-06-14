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

export const FilterCard: React.FC<FilterCardProps> = ({
  isOpen,
  onClose,
  onFilterChange,
  currentFilter,
}) => {
  const [localFilter, setLocalFilter] = useState<Filter>(currentFilter);
  const debouncedFilter = useDebounce(localFilter, 1000);
  const [showAllBrands, setShowAllBrands] = useState(false);

  const { data: brands } = useGetBrands();

  const visibleBrands = useMemo(() => {
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

  const handlePriceRangeChange = (value: [number, number]) => {
    setLocalFilter((prev) => ({
      ...prev,
      min_price: value[0],
      max_price: value[1],
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
              value={localFilter.min_price || 0}
              min={0}
              max={10000}
              onChange={(value) =>
                setLocalFilter((prev) => ({
                  ...prev,
                  min_price: value || undefined,
                }))
              }
            />
            <InputNumber
              className={styles['filters__price-input']}
              value={localFilter.max_price || 10000}
              min={0}
              max={10000}
              onChange={(value) =>
                setLocalFilter((prev) => ({
                  ...prev,
                  max_price: value || undefined,
                }))
              }
            />
          </div>
          <div className={styles['filters__price-slider']}>
            <Slider
              range
              min={0}
              max={10000}
              step={20}
              value={[
                localFilter.min_price || 0,
                localFilter.max_price || 10000,
              ]}
              onChange={handlePriceRangeChange as (value: number | number[]) => void}
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
