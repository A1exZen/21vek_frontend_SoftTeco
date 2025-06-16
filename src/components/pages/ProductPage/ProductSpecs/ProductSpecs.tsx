import styles from './styles.module.scss';

const specs = [
  { label: 'Диагональ экрана', value: '6.1"' },
  { label: 'Разрешение экрана', value: '2532x1170' },
  { label: 'Тип матрицы', value: 'OLED' },
  { label: 'Процессор', value: 'Apple A15 Bionic' },
  { label: 'Оперативная память', value: '6 ГБ' },
  { label: 'Основная камера', value: '12 Мп + 12 Мп' },
  { label: 'Фронтальная камера', value: '12 Мп' },
  { label: 'Беспроводные интерфейсы', value: 'Wi-Fi, Bluetooth, NFC' },
  { label: 'Степень защиты', value: 'IP68' },
];

export const ProductSpecs = () => {
  return (
    <div className={styles['product-specs']}>
      <h2 className={styles['product-specs__title']}>Основные характеристики</h2>
      <div className={styles['product-specs__table']}>
        {specs.map((spec) => (
          <div className={styles['product-specs__row']} key={spec.label}>
            <div className={styles['product-specs__label']}>{spec.label}</div>
            <div className={styles['product-specs__value']}>{spec.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};