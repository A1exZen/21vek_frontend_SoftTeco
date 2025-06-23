import styles from './styles.module.scss';
import { Heart, Star } from 'lucide-react';
import { Product } from '@models/product/api.ts';
import { useAddToFavorites } from '@/hooks/useFavorites/useAddToFavorites';
import { useRemoveFavorites } from '@/hooks/useFavorites/useRemoveFavorites';
import { useAddBasketItem } from '@hooks/useBasket.ts';

interface ProductGalleryProps {
  product: Product;
}

export const ProductPurchase = ({ product }: ProductGalleryProps) => {
  const { mutate: addToBasket } = useAddBasketItem();
  console.log("In cart", product.inCart);

  const hasDiscount = product.discount != null && product.discount > 0;
  const oldPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : null;
  
   const [localIsFavorite, setLocalIsFavorite] = useState(product.inFav);
  const { mutate: addToFavorites } = useAddToFavorites();
  const { mutate: removeFromFavorite } = useRemoveFavorites();

  const handleToggleFavorite = () => {
    
    if (product.inFav) {
      removeFromFavorite(product.idProduct)
    } else {
      addToFavorites(product.idProduct)
    }
    setLocalIsFavorite(prev => !prev)
  };


  const handleAddToCart = (idProduct: number) => {
    addToBasket(idProduct);
    console.log(`Добавлен в корзину: ${product.idProduct}`);
  };

  return (
    <div className={styles['product-purchase']}>
      <div className={styles['product-purchase__rating']}>
        <Star color="#f3c623" />
        <span>{product.rating.toFixed(1)}</span>
        <span className={styles['product-purchase__reviews']}>
          ({product.numberOfReviews})
        </span>
      </div>

      <div className={styles['product-purchase__price-section']}>
        <div className={styles['product-purchase__price-section-2']}>
          <span className={styles['product-purchase__price']}>
            {product.price} p.
          </span>
          {hasDiscount && (
            <span className={styles['product-purchase__discount']}>
              -{product.discount}%
            </span>
          )}
        </div>
        {oldPrice && (
          <span className={styles['product-purchase__price-old']}>
            {oldPrice} р.
          </span>
        )}
      </div>

      <div className={styles['product-purchase__buttons-section']}>
        <button
          className={!product.inCart ? 'in-cart-btn' : 'cart-btn'}
          onClick={() => handleAddToCart(product.idProduct)}
          disabled={product.inCart}
        >
          {!product.inCart ? 'В корзине' : 'Добавить в корзину'}
        </button>
        <button 
          className={styles['product-purchase__favorite-btn']}
          onClick={handleToggleFavorite}
        >
          <Heart 
            color={localIsFavorite ? '#ff4d4f' : '#000'} 
            fill={localIsFavorite ? '#ff4d4f' : 'none'}
          />
        </button>
      </div>
    </div>
  );
};
