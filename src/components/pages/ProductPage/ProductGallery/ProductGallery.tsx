import styles from './styles.module.scss';
import { Product } from '@models/product/api.ts';

interface ProductGalleryProps {
  product: Product;
}

export const ProductGallery = ({ product }: ProductGalleryProps) => {

  return (
    <div className={styles['product-gallery']}>
      {/*// If images more then one*/}
      {/*<div className={styles['product-gallery__thumbnails']}>*/}
      {/*  {images.map((img, idx) => (*/}
      {/*    <img*/}
      {/*      key={idx}*/}
      {/*      src={img}*/}
      {/*      alt={`Товар ${idx + 1}`}*/}
      {/*      onClick={() => setActiveImage(img)}*/}
      {/*      className={`${styles['product-gallery__thumb']} ${*/}
      {/*        img === activeImage*/}
      {/*          ? styles['product-gallery__thumb--active']*/}
      {/*          : ''*/}
      {/*      }`}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</div>*/}
      <div className={styles['product-gallery__main-image']}>
        <img
          src={product.img}
          alt="Основное изображение"
          className={styles['product-gallery__main-image-content']}
        />
      </div>
    </div>
  );
};
