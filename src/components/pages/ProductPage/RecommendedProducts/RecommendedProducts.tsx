// import styles from './styles.module.scss';
// import { Heart, Star } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { useRef } from 'react';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import { Carousel } from 'antd';
//
// type Product = {
//   id: number;
//   img: string;
//   price: string;
//   monthlyPayment: string;
//   isGift: boolean;
//   title: string;
//   color?: string;
//   delivery: string[];
//   discount: string;
//   oldPrice: string;
// };
//
// export const RecommendedProducts = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);
//
//   const handlePrev = () => carouselRef.current?.prev();
//   const handleNext = () => carouselRef.current?.next();
//
//   const products: Product[] = [
//     {
//       id: 1,
//       img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
//       price: '1 899,00',
//       monthlyPayment: '57.69 р./месяц',
//       isGift: true,
//       title:
//         'Смартфон восстановленный Apple iPhone 13 ZS6GB Flip Грейд B (Miknight)',
//       delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
//       discount: '14.5',
//       oldPrice: '1200,21',
//     },
//
//     {
//       id: 2,
//       img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
//       price: '1 899,00 р.',
//       monthlyPayment: '57.69 р./месяц',
//       isGift: true,
//       title:
//         'Смартфон восстановленный Apple iPhone 13 ZS6GB Flip Грейд B (синий)',
//       delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
//       discount: '14.5',
//       oldPrice: '1200,21',
//     },
//     {
//       id: 3,
//       img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
//       price: '2 699,00 р.',
//       monthlyPayment: '61.99 р./месяц',
//       isGift: true,
//       title: 'Смартфон Apple iPhone 15 ZS6GB (черный)',
//       delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
//       discount: '14.5',
//       oldPrice: '1200,21',
//     },
//     {
//       id: 4,
//       img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
//       price: '2 299,00 р.',
//       monthlyPayment: '60.84 р./месяц',
//       isGift: true,
//       title:
//         'Смартфон восстановленный Apple iPhone 14 ZS6GB Flip Грейд B (фиолетовый)',
//       delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
//       discount: '14.5',
//       oldPrice: '1200,21',
//     },
//     {
//       id: 4,
//       img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
//       price: '2 299,00 р.',
//       monthlyPayment: '60.84 р./месяц',
//       isGift: true,
//       title:
//         'Смартфон восстановленный Apple iPhone 14 ZS6GB Flip Грейд B (фиолетовый)',
//       delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
//       discount: '14.5',
//       oldPrice: '1200,21',
//     },
//     {
//       id: 4,
//       img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
//       price: '2 299,00 р.',
//       monthlyPayment: '60.84 р./месяц',
//       isGift: true,
//       title:
//         'Смартфон восстановленный Apple iPhone 14 ZS6GB Flip Грейд B (фиолетовый)',
//       delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
//       discount: '14.5',
//       oldPrice: '1200,21',
//     },
//     {
//       id: 4,
//       img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
//       price: '2 299,00 р.',
//       monthlyPayment: '60.84 р./месяц',
//       isGift: true,
//       title:
//         'Смартфон восстановленный Apple iPhone 14 ZS6GB Flip Грейд B (фиолетовый)',
//       delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
//       discount: '14.5',
//       oldPrice: '1200,21',
//     },
//   ];
//
//   return (
//     <section className={styles['recommended']}>
//       <div className={styles['recommended__header']}>
//         <h2 className={styles['recommended__title']}>Рекомендуем</h2>
//         <div className={styles['recommended__controls']}>
//           <button onClick={handlePrev} className={styles['recommended__arrow']}>
//             <LeftOutlined />
//           </button>
//           <button onClick={handleNext} className={styles['recommended__arrow']}>
//             <RightOutlined />
//           </button>
//         </div>
//       </div>
//
//       <div className={styles['recommended__carousel']}>
//         <Carousel
//           ref={carouselRef}
//           dots={false}
//           slidesToShow={5}
//           slidesToScroll={1}
//           infinite={false}
//           responsive={[
//             {
//               breakpoint: 1200,
//               settings: {
//                 slidesToShow: 4,
//               },
//             },
//             {
//               breakpoint: 992,
//               settings: {
//                 slidesToShow: 3,
//               },
//             },
//             {
//               breakpoint: 768,
//               settings: {
//                 slidesToShow: 2,
//               },
//             },
//             {
//               breakpoint: 576,
//               settings: {
//                 slidesToShow: 1,
//               },
//             },
//           ]}
//         >
//           {products.map((product) => (
//             <div key={product.id} className={styles['carousel__item']}>
//               <article className={styles['product']}>
//                 <div className={styles['product__content']}>
//                   <Link to="/" className={styles['product__img-link']}>
//                     <img
//                       alt={'product_img'}
//                       src={product.img}
//                       className={styles['product__img']}
//                     />
//                   </Link>
//                   <div className={styles['product__price-section']}>
//                     <div className={styles['product__price-wrapper']}>
//                       <span className={styles['product__price']}>
//                         {product.price}
//                       </span>
//                       <span className={styles['product__discount']}>
//                         {product.discount}%
//                       </span>
//                     </div>
//                     <div className={styles['product__old-price']}>
//                       {product.oldPrice}
//                     </div>
//                   </div>
//
//                   <div className={styles['product__title']}>{product.title}</div>
//
//                   <div className={styles['product__rating']}>
//                     <Star color="#f3c623" />
//                     <span>4.8</span>
//                   </div>
//                 </div>
//                 <button className={styles['product__button']}>В корзину</button>
//
//                 <div className={styles['product__badge']}>
//                   <Heart size={20} color={'#cbcbcb'} />
//                 </div>
//               </article>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };


export const RecommendedProducts = () => {
  return <></>
}
