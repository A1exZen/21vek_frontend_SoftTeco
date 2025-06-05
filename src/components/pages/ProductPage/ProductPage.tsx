import styles from './styles.module.scss';
import { ProductGallery } from '@pages/ProductPage/ProductGallery';
import { ProductOptions } from '@pages/ProductPage/ProductOptions';
import { ProductPurchase } from '@pages/ProductPage/ProductPurchase';
import { ProductSpecs } from '@pages/ProductPage/ProductSpecs';
import { ProductTabs } from '@pages/ProductPage/ProductTabs';
import { Breadcrumbs } from '@components/widgets/Breadcrumbs';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';
import { RecommendedProducts } from '@pages/ProductPage/RecommendedProducts';

export const ProductPage = () => {

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Скопировано')
    } catch (error) {
      console.log(error)
      toast.error('Ошибка копирования')
    }
  };

  const productName = 'Холодильник Bosch BSH 4DX 1.5 кв.м';
  return (
    <div className={styles['product-page']}>
      <div className={styles['product-page__header']}>
        <Breadcrumbs />
        <div className={styles['container-title']}>
          <h1 className={styles['product-title']}>{productName}</h1>
          <button onClick={() => copyToClipboard('12312312')} className={styles['product-art']}>код 602932<Copy color={'var(--gray-700)'} size={14} /></button>
        </div>
      </div>
      <div className={styles['product-page__main']}>
        <ProductGallery />
        <div className={styles['product-page__details']}>
          <ProductOptions />
        </div>
        <div className={styles['product-page__details']}>
          <ProductPurchase />
        </div>
      </div>
      <ProductSpecs />
      <ProductTabs />
      <RecommendedProducts />
    </div>
  );
};
