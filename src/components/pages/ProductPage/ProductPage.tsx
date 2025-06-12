import styles from './styles.module.scss';
import { ProductGallery } from '@pages/ProductPage/ProductGallery';
import { ProductPurchase } from '@pages/ProductPage/ProductPurchase';
import { ProductSpecs } from '@pages/ProductPage/ProductSpecs';
import { ProductTabs } from '@pages/ProductPage/ProductTabs';
import { Breadcrumbs } from '@components/widgets/Breadcrumbs';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';
import { RecommendedProducts } from '@pages/ProductPage/RecommendedProducts';
import Img1 from "@assets/images/iphone.jpg"

export const ProductPage = () => {
  // const { idProduct } = useParams<{ idProduct: string }>();
  // const productId = idProduct ? parseInt(idProduct, 10) : undefined;
  // const { data: product, isLoading, isError } = useGetProduct(
  //   productId!,
  //   !!productId && !isNaN(productId)
  // );

  const product = {
    idProduct: 1,
    nameProduct: 'Смартфон Samsung Galaxy A06 4GB/128GB (черный)',
    brand: 'Samsung',
    price: 16990,
    quantityInStock: 0,
    discount: 20,
    rating: 4.5,
    numberOfReviews: 56,
    status: 'в наличии',
    img: Img1,
    inСart: false,
    category: {
      idCategories: 1,
      nameCategories: 'смартфоны',
      url: 'smartphones',
    },
    characteristics: [
      {
        name: 'Основные характеристики',
        characteristics: [
          {
            name: 'тип',
            description: 'смартфон',
          },
          {
            name: 'год релиза',
            description: '2024',
          },
          {
            name: 'состояние',
            description: 'новый',
          },
          {
            name: 'диагональ экрана',
            description: '6.7',
          },
          {
            name: 'Кол-во SIM-карт',
            description: '2',
          },
          {
            name: 'Формат SIM-карты',
            description: 'Nano-SIM',
          },
        ],
      },
      {
        name: 'Операционная система',
        characteristics: [
          {
            name: 'Операционная система',
            description: 'Android',
          },
          {
            name: 'Версия',
            description: 'Android 14',
          },
        ],
      },
      {
        name: 'Экран',
        characteristics: [
          {
            name: 'Разрешение',
            description: '1600×720',
          },
          {
            name: 'Плотность пикселей',
            description: '262',
          },
          {
            name: 'Количество цветов',
            description: '16 миллионов',
          },
          {
            name: 'Защита от царапин',
            description: '-',
          },
        ],
      },
      {
        name: 'Процессор',
        characteristics: [
          {
            name: 'Платформа',
            description: 'MediaTek',
          },
          {
            name: 'Количество ядер',
            description: '8 (2+6)',
          },
          {
            name: 'Тактовая частота процессора',
            description: '2000 МГц',
          },
        ],
      },
      {
        name: 'Память',
        characteristics: [
          {
            name: 'Оперативная память',
            description: '4 Гб',
          },
          {
            name: 'Постоянная память',
            description: '128 Гб',
          },
        ],
      },
    ],
  };

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
        <div className={styles['product-page__details']}>
          {/*<ProductOptions product={product} />*/}
        </div>
        <div className={styles['product-page__details']}>
          <ProductPurchase product={product} />
        </div>
      </div>
      <ProductSpecs product={product} />
      <RecommendedProducts productBrand={product.brand} />
      <ProductTabs product={product} />
    </div>
  );
};
