import { Link } from "react-router-dom";
import { Trash } from 'lucide-react';
import styles from './styles.module.scss';
import { ICategoryItemProps } from "./types";

/**
 * Компонент элемента категории для списка сравнения
 * 
 * Отображает:
 * - Название категории (кликабельное, ведет на страницу сравнения)
 * - Количество товаров в категории
 * - Иконку удаления категории
 */
export const CategoryItem = ({
  category,
  products,
  onDelete,
  getProductCountText,
  capitalizeFirstLetter
}: ICategoryItemProps) => (
  <div className={styles["category__item"]}>
    <div className={styles["category__content"]}>
      <div className={styles["category"]}>
        <Link 
          to={`/compare/${category.url}`} 
          className={styles["category__link"]}
        >
          <h2 className={styles["category__name"]}>
            {capitalizeFirstLetter(category.nameCategories)}
          </h2>
          <div className={styles["category-__footer"]}>
            <span className={styles["product__count"]}>
              {products.length} {getProductCountText(products.length)}
            </span>
          </div>
        </Link>
      </div>
      <Trash 
        size={16} 
        color='gray'
        onClick={() => onDelete(category.idCategories)}
        className={styles["delete__icon"]}
      />
    </div>
  </div>
);