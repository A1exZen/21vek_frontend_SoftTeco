import styles from './styles.module.scss';
import { ProductGallery } from '@pages/ProductPage/ProductGallery';
import { ProductPurchase } from '@pages/ProductPage/ProductPurchase';
import { ProductSpecs } from '@pages/ProductPage/ProductSpecs';
import { ProductTabs } from '@pages/ProductPage/ProductTabs';
import { Breadcrumbs } from '@components/widgets/Breadcrumbs';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';
import { RecommendedProducts } from '@pages/ProductPage/RecommendedProducts';
import { ProductOptions } from '@pages/ProductPage/ProductOptions';
import { useGetProduct } from '@hooks/useProducts.ts';
import { useParams } from 'react-router-dom';

export const ProductPage = () => {
  const { idProduct } = useParams<{ idProduct: string }>();
  const productId = idProduct ? parseInt(idProduct, 10) : undefined;
  const { data: product } = useGetProduct(productId!);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Скопировано');
    } catch (error) {
      console.log(error);
      toast.error('Ошибка копирования');
    }
  };

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className={styles['product-page']}>
      <div className={styles['product-page__header']}>
        <Breadcrumbs />
        <div className={styles['container-title']}>
          <h1 className={styles['product-title']}>{product.nameProduct}</h1>
          <button
            onClick={() => copyToClipboard(product.idProduct.toString())}
            className={styles['product-art']}
          >
            код {product.idProduct}
            <Copy color={'var(--gray-700)'} size={14} />
          </button>
        </div>
      </div>
      <div className={styles['product-page__main']}>
        <ProductGallery product={product} />
        <ProductOptions product={product} />
        <ProductPurchase product={product} />
      </div>
      <ProductSpecs product={product} />
      <RecommendedProducts productBrand={product.brand} />
      <ProductTabs product={product} />
    </div>
  );
};
