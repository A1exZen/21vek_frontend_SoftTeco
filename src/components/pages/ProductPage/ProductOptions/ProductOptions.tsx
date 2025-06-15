import styles from './styles.module.scss';
import { Product } from '@models/product/api.ts';

interface ProductOptionsProps {
  product: Product;
}

export const ProductOptions = ({ product }: ProductOptionsProps) => {
  console.log(product);
  return (
    <div className={styles['product-options']}>
      {product.characteristics?.slice(0,1).map(group => (
        <div key={group.name} className={styles['product-options__group']}>
          <h3 className={styles['product-options__group-title']}>{group.name}</h3>
          <div className={styles['product-options__table']}>
            {group.characteristics.map(spec => (
              <div className={styles['product-options__row']} key={spec.name}>
                <div className={styles['product-options__label']}>{spec.name}</div>
                <div className={styles['product-options__value']}>{spec.count}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};