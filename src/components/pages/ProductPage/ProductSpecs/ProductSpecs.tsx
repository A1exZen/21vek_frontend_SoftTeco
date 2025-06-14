import styles from './styles.module.scss';
import { Product } from '@models/product/api.ts';

interface ProductSpecsProps {
  product: Product;
}

export const ProductSpecs = ({ product }: ProductSpecsProps) => {
  return (
    <div className={styles['product-specs']}>
      {product.characteristics?.slice(1).map(group => (
        <div key={group.name} className={styles['product-specs__group']}>
          <h3 className={styles['product-specs__group-title']}>{group.name}</h3>
          <div className={styles['product-specs__table']}>
            {group.characteristics.map(spec => (
              <div className={styles['product-specs__row']} key={spec.name}>
                <div className={styles['product-specs__label']}>{spec.name}</div>
                <div className={styles['product-specs__value']}>{spec.count}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};