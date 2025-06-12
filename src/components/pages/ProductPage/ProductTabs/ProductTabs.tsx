import { useState } from 'react';
import styles from './styles.module.scss';
import { Star } from 'lucide-react';
import { IProduct } from '@pages/ProductPage/ProductOptions/types.ts';

interface ProductTabsProps {
  product: IProduct;
}

const tabs = ['Описание', 'Отзывы', 'Вопросы'];

export const ProductTabs = ({product}: ProductTabsProps) => {
  const [active, setActive] = useState('Описание');
  console.log(product);

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
        {active === 'Описание' && (
          <p>
            Это пример описания товара iPhone 14 128 ГБ. Современный смартфон с
            ярким OLED-дисплеем и мощным процессором A15 Bionic.
          </p>
        )}
        {active === 'Отзывы' && (
          <div className={styles['reviews-section']}>
            <div className={styles['reviews-left']}>
              <div className={styles['average-rating']}>
                <span className={styles['rating-score']}>5</span>
                <div className={styles['rating-stars']}>
                  <Star fill="#ffca28" color="#ffca28" />
                  <Star fill="#ffca28" color="#ffca28" />
                  <Star fill="#ffca28" color="#ffca28" />
                  <Star fill="#ffca28" color="#ffca28" />
                  <Star fill="#ffca28" color="#ffca28" />
                </div>
                <div className={styles['total-reviews']}>
                  <span>104 отзыва</span>
                </div>
              </div>
              <button className={styles['leave-review-button']}>
                Оставить отзыв
              </button>
            </div>
            <div className={styles['reviews-right']}>
              <div className={styles['rating']}>
                <span className={styles['rating-score']}>5</span>
                <div className={styles['rating-stars']}>
                  <Star fill="#ffca28" color="#ffca28" />
                </div>
                <div className={styles['rating-bar']}>
                  <div
                    className={styles['rating-bar-fill']}
                    style={{ width: '100%' }}
                  ></div>
                </div>
                <span className={styles['rating-count']}>100</span>
              </div>
              <div className={styles['rating']}>
                <span className={styles['rating-score']}>4</span>
                <div className={styles['rating-stars']}>
                  <Star fill="#ffca28" color="#ffca28" />
                </div>
                <div className={styles['rating-bar']}>
                  <div
                    className={styles['rating-bar-fill']}
                    style={{ width: '4%' }}
                  ></div>
                </div>
                <span className={styles['rating-count']}>4</span>
              </div>
              <div className={styles['rating']}>
                <span className={styles['rating-score']}>3</span>
                <div className={styles['rating-stars']}>
                  <Star fill="#ffca28" color="#ffca28" />
                </div>
                <div className={styles['rating-bar']}>
                  <div
                    className={styles['rating-bar-fill']}
                    style={{ width: '0%' }}
                  ></div>
                </div>
                <span className={styles['rating-count']}>0</span>
              </div>
              <div className={styles['rating']}>
                <span className={styles['rating-score']}>2</span>
                <div className={styles['rating-stars']}>
                  <Star fill="#ffca28" color="#ffca28" />
                </div>
                <div className={styles['rating-bar']}>
                  <div
                    className={styles['rating-bar-fill']}
                    style={{ width: '0%' }}
                  ></div>
                </div>
                <span className={styles['rating-count']}>0</span>
              </div>
              <div className={styles['rating']}>
                <span className={styles['rating-score']}>1</span>
                <div className={styles['rating-stars']}>
                  <Star fill="#ffca28" color="#ffca28" />
                </div>
                <div className={styles['rating-bar']}>
                  <div
                    className={styles['rating-bar-fill']}
                    style={{ width: '0%' }}
                  ></div>
                </div>
                <span className={styles['rating-count']}>0</span>
              </div>
            </div>
          </div>
        )}
        {active === 'Вопросы' && <p>Вы можете задать вопрос о товаре.</p>}
      </div>
    </div>
  );
};
