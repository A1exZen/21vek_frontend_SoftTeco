// import { Link, useParams, useLocation } from 'react-router-dom';
// import { useMemo } from 'react';
//
// import styles from './Breadcrumbs.module.scss';
// import { useGetAllCategories, useGetCategoryByUrl } from '@hooks/useCategories.ts';
// import {
//   CategoryWithoutProducts,
//   Product,
//   ResponseGetAllCategories
// } from '@models/category/api.ts';
//
// interface BreadcrumbItem {
//   label: string;
//   url: string;
//   isActive?: boolean;
// }
//
// interface BreadcrumbsProps {
//   customItems?: BreadcrumbItem[]; // Optional override for custom breadcrumb items
//   product?: Product; // Optional product data for product pages
// }
// // Utility to build category hierarchy
// const buildCategoryHierarchy = (
//   categories: ResponseGetAllCategories,
//   targetCategory: CategoryWithoutProducts,
// ): ResponseGetAllCategories => {
//   const hierarchy: ResponseGetAllCategories = [targetCategory];
//   let currentCategory = targetCategory;
//
//   while (currentCategory.idParent) {
//     const parent = categories.find(
//       (cat) => cat.idCategories === currentCategory.idParent,
//     );
//     if (!parent) break;
//     hierarchy.unshift(parent);
//     currentCategory = parent;
//   }
//
//   return hierarchy;
// };
//
// export const Breadcrumbs = ({ customItems, product }: BreadcrumbsProps) => {
//   const { categoryUrl, productId } = useParams<{
//     categoryUrl?: string;
//     productId?: string;
//   }>();
//   const location = useLocation();
//   const { data: categories, isLoading: isCategoriesLoading } = useGetAllCategories();
//   const { data: currentCategory } = useGetCategoryByUrl(categoryUrl || '');
//
//   // Determine breadcrumb items
//   const items = useMemo(() => {
//     // Return custom items if provided
//     if (customItems && customItems.length > 0) {
//       return customItems.map((item, index) => ({
//         ...item,
//         isActive: index === customItems.length - 1,
//       }));
//     }
//
//     // Default: Home page
//     const breadcrumbItems: BreadcrumbItem[] = [
//       { label: 'Главная', url: '/', isActive: false },
//     ];
//
//     if (!categories || isCategoriesLoading) {
//       return breadcrumbItems;
//     }
//
//     // Category page
//     if (categoryUrl && currentCategory) {
//       const hierarchy = buildCategoryHierarchy(categories, currentCategory);
//       breadcrumbItems.push(
//         ...hierarchy.map((cat, index) => ({
//           label: cat.nameCategories,
//           url: `/category/${cat.url}`,
//           isActive: index === hierarchy.length - 1,
//         })),
//       );
//     }
//
//     // Product page
//     if (productId && product) {
//       const hierarchy = buildCategoryHierarchy(categories, product.category);
//       breadcrumbItems.push(
//         ...hierarchy.map((cat) => ({
//           label: cat.nameCategories,
//           url: `/category/${cat.url}`,
//           isActive: false,
//         })),
//         {
//           label: product.nameProduct,
//           url: `/product/${productId}`,
//           isActive: true,
//         },
//       );
//     }
//
//     return breadcrumbItems;
//   }, [
//     customItems,
//     categoryUrl,
//     productId,
//     categories,
//     isCategoriesLoading,
//     currentCategory,
//     product,
//   ]);
//
//   if (items.length === 0) {
//     return null;
//   }
//
//   return (
//     <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
//       <ol className={styles.breadcrumbs__list}>
//         {items.map((item, index) => (
//           <li
//             key={item.url}
//             // className={cn(styles.breadcrumbs__item, {
//             //   [styles['breadcrumbs__item--active']]: item.isActive,
//             // })}
//             aria-current={item.isActive ? 'page' : undefined}
//           >
//             {item.isActive ? (
//               <span className={styles.breadcrumbs__label}>{item.label}</span>
//             ) : (
//               <Link to={item.url} className={styles.breadcrumbs__link}>
//                 {item.label}
//               </Link>
//             )}
//             {index < items.length - 1 && (
//               <span
//                 className={styles.breadcrumbs__separator}
//                 aria-hidden="true"
//               >
//                 &gt;
//               </span>
//             )}
//           </li>
//         ))}
//       </ol>
//     </nav>
//   );
// };
//
// export default Breadcrumbs;


export const Breadcrumbs = () => {
  return (
    <div>Breadcrumbs</div>
  );
};
