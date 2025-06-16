import { products } from './constants';
import { ProductComparisonList } from './ProductComparisonList/ProductComparisonList';


export const ProductComparison = () => {
  return <ProductComparisonList products={products} />;
}