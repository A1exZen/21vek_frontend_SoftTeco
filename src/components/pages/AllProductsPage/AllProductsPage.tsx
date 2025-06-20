import { useProducts } from '@hooks/useProducts';
import { FilterCard } from '@pages/AllProductsPage/FilterCard';
import { Spin } from 'antd';
import { Funnel } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import styles from './styles.module.scss';
import Sad from '@icons/sad.svg';

const SEARCH_PARAM_BRAND = 'brand';
const SEARCH_PARAM_PRICE_FILTER = 'price_filtr';
const SEARCH_PARAM_POPULAR = 'popular';
const SEARCH_PARAM_MIN_PRICE = 'min_price';
const SEARCH_PARAM_MAX_PRICE = 'max_price';

const INITIAL_PAGE_SIZE = 12;
const LOAD_MORE_INCREMENT = 12;

type FilterType = {
  brand?: string;
  price_filtr?: 'asc' | 'desc';
  popular?: boolean;
  min_price?: number;
  max_price?: number;
};

export const AllProductsPage = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageSize, setPageSize] = useState(INITIAL_PAGE_SIZE);

  const [filter, setFilter] = useState<{
    brand?: string;
    price_filtr?: 'asc' | 'desc';
    popular?: boolean;
    min_price?: number;
    max_price?: number;
  }>({
    brand: searchParams.get(SEARCH_PARAM_BRAND) || undefined,
    price_filtr:
      (searchParams.get(SEARCH_PARAM_PRICE_FILTER) as
        | 'asc'
        | 'desc'
        | undefined) || undefined,
    popular: searchParams.get(SEARCH_PARAM_POPULAR) === 'true' || undefined,
    min_price: searchParams.get(SEARCH_PARAM_MIN_PRICE)
      ? parseInt(searchParams.get(SEARCH_PARAM_MIN_PRICE)!)
      : undefined,
    max_price: searchParams.get(SEARCH_PARAM_MAX_PRICE)
      ? parseInt(searchParams.get(SEARCH_PARAM_MAX_PRICE)!)
      : undefined,
  });
  const {
    data: products,
    isLoading,
    error,
    isFetching,
    hasMore,
  } = useProducts({
    ...filter,
    page: 0,
    size: pageSize,
  });

  const shouldResetPageSize = useCallback(
    (oldFilter: FilterType, newFilter: FilterType) => {
      const significantKeys: (keyof FilterType)[] = [
        'brand',
        'min_price',
        'max_price',
        'popular',
      ];

      return significantKeys.some((key) => oldFilter[key] !== newFilter[key]);
    },
    [],
  );

  useEffect(() => {
    const newParams = new URLSearchParams();
    if (filter.brand) newParams.set(SEARCH_PARAM_BRAND, filter.brand);
    if (filter.price_filtr)
      newParams.set(SEARCH_PARAM_PRICE_FILTER, filter.price_filtr);
    if (filter.popular) newParams.set(SEARCH_PARAM_POPULAR, 'true');
    if (filter.min_price)
      newParams.set(SEARCH_PARAM_MIN_PRICE, filter.min_price.toString());
    if (filter.max_price)
      newParams.set(SEARCH_PARAM_MAX_PRICE, filter.max_price.toString());
    setSearchParams(newParams);
  }, [filter, setSearchParams]);

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  const closeFilters = () => {
    setIsFiltersOpen(false);
  };

  const handleFilterChange = (newFilter: typeof filter) => {
    if (shouldResetPageSize(filter, newFilter)) {
      setPageSize(INITIAL_PAGE_SIZE);
    }
    setFilter(newFilter);
  };

  const handleLoadMore = () => {
    setPageSize((prevSize) => prevSize + LOAD_MORE_INCREMENT);
  };

  return (
    <div className={styles['products']}>
      <button
        className={styles['products__filter-toggle']}
        onClick={toggleFilters}
        aria-label="Открыть фильтры"
      >
        <Funnel />
        Фильтры
      </button>

      <div className={styles['products__main-container']}>
        <main className={styles['products__list']}>
          <div className={styles['products__grid']}>
            {error ? (
              <div className={'not-found-sad'}>
                Ничего не найдено!
                <Sad />
              </div>
            ) : isLoading || isFetching ? (
              <Spin size="large" />
            ) : products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.idProduct} product={product} />
              ))
            ) : (
              <div>Нет продуктов для отображения</div>
            )}
          </div>
          {hasMore && products.length > 0 && (
            <div className={styles['products__load-more']}>
              <button
                className={styles['products__load-more-btn']}
                onClick={handleLoadMore}
                disabled={isFetching}
              >
                {isFetching ? 'Загрузка...' : 'Показать еще'}
              </button>
            </div>
          )}
        </main>

        {isFiltersOpen && (
          <div
            className={styles['products__filters-overlay']}
            onClick={closeFilters}
          />
        )}
        <FilterCard
          isOpen={isFiltersOpen}
          onClose={closeFilters}
          onFilterChange={handleFilterChange}
          currentFilter={filter}
        />
      </div>
    </div>
  );
};
