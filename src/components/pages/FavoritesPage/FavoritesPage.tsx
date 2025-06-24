import styles from './styles.module.scss';
import { Divider } from 'antd';
import { useGetFavorites } from '@/hooks/useFavorites/useGetFavorites';
import {
  FavoriteCard
} from '@pages/FavoritesPage/FavoriteCard';

const FavoritesPage = () => {
  const { data: favorites, isLoading: isFetching } = useGetFavorites();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Избранные товары</h2>
      <Divider type="horizontal" />

      {isFetching ? (
        <div>Загрузка...</div>
      ) : !favorites || favorites.length === 0 ? (
        <div className={styles.empty__message}>
          У вас пока нет ни одного товара в избранном.
        </div>
      ) : (
        <div className={styles.favorites__list}>
          {favorites.map((item) => (
            <FavoriteCard item={item} key={item.idProduct} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;