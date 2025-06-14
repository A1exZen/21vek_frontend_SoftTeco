import { useState } from 'react';
import styles from './styles.module.scss';
import { Star } from 'lucide-react';
import { Product } from '@models/product/api.ts';

interface ProductTabsProps {
  product: Product;
}

const tabs = ['Отзывы', 'Описание', 'Вопросы'];

interface RatingDistribution {
  score: number;
  count: number;
  percentage: number;
}

const calculateRatingDistribution = (
  totalReviews: number,
  averageRating: number,
): RatingDistribution[] => {
  if (totalReviews === 0) {
    return Array.from({ length: 5 }, (_, i) => ({
      score: 5 - i,
      count: 0,
      percentage: 0,
    }));
  }

  const distribution: RatingDistribution[] = Array.from(
    { length: 5 },
    (_, i) => {
      const score = 5 - i;
      let count = 0;
      if (score === Math.round(averageRating)) {
        count = totalReviews;
      }
      return {
        score,
        count,
        percentage: (count / totalReviews) * 100,
      };
    },
  );

  return distribution;
};

export const ProductTabs = ({ product }: ProductTabsProps) => {
  const [active, setActive] = useState('Отзывы');

  const { numberOfReviews, rating } = product;
  const ratingDistribution = calculateRatingDistribution(
    numberOfReviews as number,
    rating,
  );
  const formattedRating = rating.toFixed(1);

  return (
    <div className={styles['product-tabs']}>
      <div className={styles['product-tabs__list']}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles['product-tabs__tab']} ${
              active === tab ? styles['product-tabs__tab--active'] : ''
            }`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles['product-tabs__content']}>
        {active === 'Отзывы' && (
          <div
            className={styles['reviews-section']}
            role="region"
            aria-label="Отзывы о продукте"
          >
            <div className={styles['reviews-left']}>
              <div
                className={styles['average-rating']}
                aria-label={`Средний рейтинг ${formattedRating} из 5`}
              >
                <span className={styles['rating-score']}>
                  {formattedRating}
                </span>
                <div className={styles['rating-stars']} aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      fill={i < Math.round(rating) ? '#ffca28' : '#e0e0e0'}
                      color={i < Math.round(rating) ? '#ffca28' : '#e0e0e0'}
                    />
                  ))}
                </div>
                <div className={styles['total-reviews']}>
                  <span>{numberOfReviews} отзывов</span>
                </div>
              </div>
              <button
                className={styles['leave-review-button']}
                aria-label="Оставить отзыв о продукте"
              >
                Оставить отзыв
              </button>
            </div>
            <div className={styles['reviews-right']}>
              {ratingDistribution.map(({ score, count, percentage }) => (
                <div
                  key={score}
                  className={styles['rating']}
                  aria-label={`Рейтинг ${score} звёзд`}
                >
                  <span className={styles['rating-score']}>{score}</span>
                  <div className={styles['rating-stars']} aria-hidden="true">
                    <Star fill="#ffca28" color="#ffca28" />
                  </div>
                  <div className={styles['rating-bar']}>
                    <div
                      className={styles['rating-bar-fill']}
                      style={{ width: `${percentage}%` }}
                      aria-label={`Процент отзывов с рейтингом ${score}: ${percentage}%`}
                    />
                  </div>
                  <span className={styles['rating-count']}>{count}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {active === 'Описание' && <p>Описание товара</p>}
        {active === 'Вопросы' && <p>Вы можете задать вопрос о товаре.</p>}
      </div>
    </div>
  );
};
