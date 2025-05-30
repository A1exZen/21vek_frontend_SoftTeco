import { useParams } from 'react-router-dom';
import {
  productCategories
} from '@components/widgets/ProductCatalog/constants.ts';

export const CategoryPage = () => {
  const { categoryUrl } = useParams<{ categoryUrl: string }>();

  const category = productCategories.find(
    (cat) => cat.url === categoryUrl
  );
  if (!category) {
    return <div>Категория не найдена</div>;
  }
  return (
    <h1>{category.id}</h1>
  );
};
