import { useParams } from 'react-router-dom';

export const CategoryPage = () => {
  const {categoryId} = useParams()
  return (
    <div>{categoryId}</div>
  );
};
