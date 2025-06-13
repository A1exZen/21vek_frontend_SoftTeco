import { useState } from 'react';
import styles from './styles.module.scss';

const tabs = ['Описание', 'Отзывы', 'Вопросы'];

export const ProductTabs = () => {
  const [active, setActive] = useState('Описание');

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
            Это пример описания товара iPhone 14 128 ГБ. Современный смартфон с ярким OLED-дисплеем и мощным процессором
            A15 Bionic.
          </p>
        )}
        {active === 'Отзывы' && <p>Пока отзывов нет.</p>}
        {active === 'Вопросы' && <p>Вы можете задать вопрос о товаре.</p>}
      </div>
    </div>
  );
};