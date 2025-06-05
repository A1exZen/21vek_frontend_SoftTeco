import { useState } from 'react';
import styles from './styles.module.scss';

const main1 = 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/8027/769/iphone14128gbmpvn3_apple_63b7d279ab09e.jpeg';
const thumb1 = 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/8027/769/iphone14128gbmpvn3_apple_63b7d28c105d6.jpeg';
const thumb2 = 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/8027/769/iphone14128gbmpvn3_apple_63b7d287322cb.jpeg';
const images = [main1, thumb1, thumb2];

export const ProductGallery = () => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className={styles['product-gallery']}>
      <div className={styles['product-gallery__thumbnails']}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Товар ${idx + 1}`}
            onClick={() => setActiveImage(img)}
            className={`${styles['product-gallery__thumb']} ${
              img === activeImage ? styles['product-gallery__thumb--active'] : ''
            }`}
          />
        ))}
      </div>
      <div className={styles['product-gallery__main-image']}>
        <img
          src={activeImage}
          alt="Основное изображение"
          className={styles['product-gallery__main-image-content']}
        />
      </div>
    </div>
  );
};