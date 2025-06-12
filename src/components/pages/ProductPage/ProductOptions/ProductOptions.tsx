import React, { useState } from 'react';
import styles from './styles.module.scss';
import { IProduct } from '@pages/ProductPage/ProductOptions/types.ts';

interface ProductOptionsProps {
  product: IProduct;
}

const OptionGroup = ({
  title,
  options,
  selected,
  onSelect,
}: {
  title: string;
  options: string[];
  selected: string | undefined;
  onSelect: (value: string) => void;
}) => (
  <div className={styles['product-options__group']}>
    <div className={styles['product-options__label']}>{title}</div>
    <div className={styles['product-options__options']}>
      {options.map((option) => (
        <button
          key={option}
          className={`${styles['product-options__option']} ${
            selected === option ? styles['product-options__option--active'] : ''
          }`}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export const ProductOptions = ({ product }: ProductOptionsProps) => {
  const [color, setColor] = useState<string | undefined>(undefined);
  const [memory, setMemory] = useState<string | undefined>(undefined);

  const colorOptions =
    product.characteristics
      .find((group) => group.name.toLowerCase().includes('цвет'))
      ?.characteristics.map((char) => char.description) || [];
  const memoryOptions =
    product.characteristics
      .find((group) => group.name.toLowerCase().includes('память'))
      ?.characteristics.map((char) => char.description) || [];

  return (
    <div className={styles['product-options']}>
      {colorOptions.length > 0 && (
        <OptionGroup
          title="Цвет"
          options={colorOptions}
          selected={color}
          onSelect={setColor}
        />
      )}
      {memoryOptions.length > 0 && (
        <OptionGroup
          title="Память"
          options={memoryOptions}
          selected={memory}
          onSelect={setMemory}
        />
      )}
    </div>
  );
};
