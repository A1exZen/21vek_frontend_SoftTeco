import { useState, useCallback } from 'react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { FAVORITES_MOCK, IFavoriteItem } from './constants';
import styles from './styles.module.scss';
import { Star, ShoppingCart, Check } from 'lucide-react';
import UndoNotification from '@/components/ui/UndoNotification/UndoNotification';
import { Divider } from 'antd';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<IFavoriteItem[]>(FAVORITES_MOCK);
  const [undoState, setUndoState] = useState<{
    item: IFavoriteItem | null;
    key: number;
  }>({ item: null, key: 0 });

  const handleToggleCart = (id: number) => {
    setFavorites(prevFavorites =>
      prevFavorites.map(item =>
        item.id === id ? { ...item, inCart: !item.inCart } : item
      )
    );
  };

  const handleRemove = (id: number) => {
    const itemToRemove = favorites.find(item => item.id === id);
    if (!itemToRemove) return;

    setUndoState({
      item: itemToRemove,
      key: Date.now()
    });
  };

  const handleUndo = () => {
    setUndoState({ item: null, key: 0 });
  };

  const handleRemoveConfirm = useCallback(() => {
    if (undoState.item) {
      setFavorites(prevFavorites =>
        prevFavorites.filter(item => item.id !== undoState.item?.id)
      );
    }
    setUndoState({ item: null, key: 0 });
  }, [undoState.item]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Избранные товары</h2>
      <Divider type='horizontal'/>
      
      {favorites.length === 0 ? (
        <div className={styles.emptyMessage}>
          У вас пока нет ни одного товара в избранном.
        </div>
      ) : (
        <div className={styles.favoritesList}>
          {favorites.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.imageContainer}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className={styles.productImage}
                  />
                </div>
                
                <div className={styles.infoContainer}>
                  <Link to={`/product/${item.id}`} className={styles.productLink}>
                    {item.name}
                  </Link>
                  
                  <div className={styles.productCode}>код {item.code}</div>
                  
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={16}
                        fill={i < Math.floor(item.rating) ? '#FFD700' : 'none'}
                        color="#FFD700"
                      />
                    ))}
                    <span className={styles.ratingValue}>({item.rating.toFixed(1)})</span>
                  </div>
                  
                  <div className={styles.price}>{item.price.toLocaleString()} р.</div>
                  
                  <div className={styles.actions}>
                    {item.inCart ? (
                      <Button 
                        variant="solid"
                        color="first"
                        className={styles.inCartButton}
                        onClick={() => handleToggleCart(item.id)}
                      >
                        <Check size={16} className={styles.icon} />
                        В корзине
                      </Button>
                    ) : (
                      <Button 
                        variant="solid"
                        color="first"
                        className={styles.cartButton}
                        onClick={() => handleToggleCart(item.id)}
                      >
                        <ShoppingCart size={16} className={styles.icon} color='white'/>
                        В корзину
                      </Button>
                    )}
                    
                    <Button 
                      variant="link"
                      className={styles.removeButton}
                      onClick={() => handleRemove(item.id)}
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

      {undoState.item && (
      <UndoNotification
        key={undoState.key}
        message={`Товар "${undoState.item.name}" удален`}
        onUndo={handleUndo}
        onComplete={handleRemoveConfirm}
      />
      )}
    </div>
  );
};

export default FavoritesPage;