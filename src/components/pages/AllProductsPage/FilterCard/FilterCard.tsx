import { CloseOutlined } from '@ant-design/icons';
import { InputNumber, Slider } from 'antd';
import React, { useState } from 'react';
import styles from './styles.module.scss'

interface Filter {
  brands: string[];
  priceRange: [number, number];
  deliveryOption: string;
  sortBy: string;
}

interface FilterCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterCard: React.FC<FilterCardProps> = ({
  isOpen,
  onClose,
}) => {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [filter, setFilter] = useState<Filter>({
    brands: [],
    priceRange: [49, 6699],
    deliveryOption: 'any',
    sortBy: 'popular',
  });

  const brands = [
    'Apple',
    'Xiaomi',
    'BQ',
    'Samsung',
    'Honor',
    'Maxvi',
    'Huawei',
    'POCO',
  ];

  const handleBrandChange = (brand: string) => {
    setFilter((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand],
    }));
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
            value={filter.sortBy}
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                sortBy: e.target.value,
              }))
            }
          >
            <option value="popular">Сначала популярные</option>
            <option value="price-asc">По возрастанию цены</option>
            <option value="price-desc">По убыванию цены</option>
            <option value="rating">По рейтингу</option>
          </select>
        </div>

        <div className={styles['filters__section']}>
          <h3 className={styles['filters__title']}>Цена</h3>
          <div className={styles['filters__price-inputs']}>
            <InputNumber
              className={styles['filters__price-input']}
              value={filter.priceRange[0]}
              min={0}
              max={10000}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  priceRange: [value || 0, prev.priceRange[1]],
                }))
              }
            />
            <InputNumber
              className={styles['filters__price-input']}
              value={filter.priceRange[1]}
              min={0}
              max={10000}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  priceRange: [prev.priceRange[0], value || 0],
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
              value={filter.priceRange}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  priceRange: value as [number, number],
                }))
              }
              tooltip={{
                formatter: (value) => `${value} р.`,
              }}
              trackStyle={[{ backgroundColor: '#1890ff' }]}
            />
          </div>
        </div>

        <div className={styles['filters__section']}>
          <h3 className={styles['filters__title']}>Срок доставки</h3>
          <div className={styles['filters__radio-group']}>
            <label className={styles['filters__radio']}>
              <input
                type="radio"
                name="delivery"
                value="any"
                checked={filter.deliveryOption === 'any'}
                onChange={(e) =>
                  setFilter((prev) => ({
                    ...prev,
                    deliveryOption: e.target.value,
                  }))
                }
              />
              <span className={styles['filters__radio-text']}>Не важно</span>
            </label>
            <label className={styles['filters__radio']}>
              <input
                type="radio"
                name="delivery"
                value="today"
                checked={filter.deliveryOption === 'today'}
                onChange={(e) =>
                  setFilter((prev) => ({
                    ...prev,
                    deliveryOption: e.target.value,
                  }))
                }
              />
              <span className={styles['filters__radio-text']}>
                Сегодня или завтра
              </span>
            </label>
            <label className={styles['filters__radio']}>
              <input
                type="radio"
                name="delivery"
                value="5days"
                checked={filter.deliveryOption === '5days'}
                onChange={(e) =>
                  setFilter((prev) => ({
                    ...prev,
                    deliveryOption: e.target.value,
                  }))
                }
              />
              <span className={styles['filters__radio-text']}>До 5 дней</span>
            </label>
          </div>
        </div>

        <div className={styles['filters__section']}>
          <h3 className={styles['filters__title']}>Производители</h3>
          <div className={styles['filters__checkbox-group']}>
            {brands.slice(0, showAllBrands ? brands.length : 8).map((brand) => (
              <label key={brand} className={styles['filters__checkbox']}>
                <input
                  type="checkbox"
                  checked={filter.brands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <span className={styles['filters__checkbox-text']}>
                  {brand}
                </span>
              </label>
            ))}
            <button
              className={styles['filters__show-more']}
              onClick={() => setShowAllBrands(!showAllBrands)}
            >
              {showAllBrands ? 'Скрыть' : 'Посмотреть все'}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
