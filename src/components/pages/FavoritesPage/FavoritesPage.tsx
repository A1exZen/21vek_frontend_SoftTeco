import { useCallback } from 'react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Star, ShoppingCart } from 'lucide-react';
import { Divider } from 'antd';
import { useGetFavorites } from '../../../hooks/useFavorites/useGetFavorites';
import { useRemoveFavorites } from '../../../hooks/useFavorites/useRemoveFavorites';
import toast from 'react-hot-toast';

const FavoritesPage = () => {
  const { data: favorites = [], isFetching } = useGetFavorites();
  const { mutate: removeFavorite } = useRemoveFavorites();

  const handleRemove = useCallback((actionId: number) => {
  removeFavorite(actionId, {
    onSuccess: () => {
      toast.success('Товар удалён из избранного');
    },
    onError: () => {
      toast.error('Ошибка при удалении');
    },
  });
}, [removeFavorite]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Избранные товары</h2>
      <Divider type="horizontal" />

      {isFetching ? (
        <div>Загрузка...</div>
      ) : favorites.length === 0 ? (
        <div className={styles.empty__message}>
          У вас пока нет ни одного товара в избранном.
        </div>
      ) : (
        <div className={styles.favorites__list}>
          {favorites.map((item) => (
            <div key={item.idProduct} className={styles.card}>
              <div className={styles.card__content}>
                <Link to={`/product/${item.idProduct}`} className={styles.image__container} >
                  <img
                    src={item.img}
                    alt={item.nameProduct}
                    className={styles.product__image}
                    loading="lazy"
                  />
                </Link>
                <div className={styles.info__container}>
                  <Link to={`/product/${item.idProduct}`} className={styles.product__link} >
                    {item.nameProduct}
                  </Link>

                  <div className={styles.product__meta}>
                    <span>Бренд: {item.brand}</span>
                    <span>Категория: {item.categoriesId}</span>
                    <span>Статус: {item.status}</span>
                  </div>

                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={16}
                        fill={i < Math.floor(item.rating) ? '#FFD700' : 'none'}
                        color="#FFD700"
                      />
                    ))}
                    <span className={styles['rating-value']}>({item.rating.toFixed(1)})</span>
                  </div>

                  <div className={styles.price}>{item.price.toLocaleString()} р.</div>

                  <div className={styles.actions}>
                    <Button 
                      variant="solid"
                      color="first"
                      className={styles.cart__button}
                    >
                      <ShoppingCart size={16} className={styles.icon} color='white'/>
                      В корзину
                    </Button>

                    <Button 
                      variant="link"
                      className={styles.remove__button}
                      onClick={() => handleRemove(item.idProduct)}
                    >
                      Удалить из списка
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;