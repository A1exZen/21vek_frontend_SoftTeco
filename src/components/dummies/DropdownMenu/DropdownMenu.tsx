import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

type DropdownItemType = {
  title: string;
  path?: string;
  href?: string;
  onClick?: () => void;
  isText?: boolean;
  icon?: React.ReactNode;
};

type DropdownMenuPropsType = {
  title: string;
  items: DropdownItemType[];
  icon?: React.ReactNode;
};

const DropdownMenu = ({ title, items, icon }: DropdownMenuPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles["dropdown"]} ref={dropdownRef}>
      <button 
        className={styles["dropdown__toggle"]}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span>{title}</span>
        {icon || <span className={styles["dropdown__arrow"]} />}
      </button>
      
      {isOpen && (
  <ul className={styles["dropdown__menu"]}>
    {items.map((item, index) => (
      <li key={index} className={styles["dropdown__item"]}>
        {item.isText ? (
          <span className={styles["dropdown__text"]}>{item.title}</span>
        ) : item.path ? (
          <Link 
            to={item.path} 
            className={styles["dropdown__link"]}
            onClick={() => setIsOpen(false)}
          >
            {item.icon && <span className={styles["dropdown__icon"]}>{item.icon}</span>}
            {item.title}
          </Link>
        ) : item.href ? (
          <a 
            href={item.href} 
            className={styles["dropdown__link"]}
            onClick={() => setIsOpen(false)}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {item.icon && <span className={styles["dropdown__icon"]}>{item.icon}</span>}
            {item.title}
          </a>
        ) : (
          <button 
            className={styles["dropdown__button"]}
            onClick={() => {
              item.onClick?.();
              setIsOpen(false);
            }}
          >
            {item.icon && <span className={styles["dropdown__icon"]}>{item.icon}</span>}
            {item.title}
          </button>
        )}
      </li>
    ))}
  </ul>
)}
    </div>
  );
};

export default DropdownMenu;