import { ChangeEvent, memo, useCallback, useEffect, useRef, useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from '../styles.module.scss';
import debounce from 'lodash/debounce';
import { useSearchProducts } from '@hooks/useProducts';
import useClickOutside from '@hooks/useClickOutside';

interface SearchProps {
  className?: string;
}

export const Search = memo(({ className }: SearchProps) => {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  const { data: searchResults, isFetching } = useSearchProducts(searchTerm);

  const handleSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
      setIsSearchOpen(!!value);
    }, 300, { leading: false, trailing: true }),
    []
  );

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    handleSearch(value);
  }, [handleSearch]);

  const handleClear = useCallback(() => {
    setInputValue('');
    setSearchTerm('');
    setIsSearchOpen(false);
  }, []);

  const closeSearchResults = useCallback(() => {
    setIsSearchOpen(false);
    setInputValue('');
    setSearchTerm('');
  }, []);

  useClickOutside(isSearchOpen, searchResultsRef, closeSearchResults);

  useEffect(() => {
    return () => {
      handleSearch.cancel();
    };
  }, [handleSearch]);

  return (
    <div className={`${styles['search-container']} ${className || ''}`} ref={searchResultsRef}>
      <Input
        size="large"
        placeholder="Поиск товаров..."
        prefix={<SearchOutlined />}
        className={styles.searchInput}
        onChange={handleInputChange}
        value={inputValue}
        allowClear={{ clearIcon: <span onClick={handleClear}>✕</span> }}
      />
      {isSearchOpen && !isFetching && searchResults && (
        <div className={styles['search-results']}>
          {searchResults.categories.length > 0 && (
            <div className={styles['search-section']}>
              <h4 className={styles['search-section__title']}>Категории</h4>
              <div className={styles['search-section__items']}>
                {searchResults.categories.map((category) => (
                  <Link
                    to={`/${category.url}`}
                    key={category.url}
                    className={styles['search-item']}
                    onClick={closeSearchResults}
                  >
                    {category.nameProduct}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {searchResults.products.length > 0 && (
            <div className={styles['search-section']}>
              <h4 className={styles['search-section__title']}>Товары</h4>
              <div className={styles['search-section__items']}>
                {searchResults.products.slice(0, 10).map((product) => (
                  <Link
                    to={`/product/${product.idProduct}`}
                    key={product.idProduct}
                    className={styles['product-item']}
                    onClick={closeSearchResults}
                  >
                    <div className={styles['product-item__info']}>
                      <span className={styles['product-item__name']}>
                        {product.nameProduct}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      {isSearchOpen && isFetching && (
        <div className={styles['search-loading']}>Загрузка...</div>
      )}
    </div>
  );
});