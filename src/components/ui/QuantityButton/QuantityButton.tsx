import { useState } from 'react';
import styles from './styles.module.scss';
import { Minus, Plus } from 'lucide-react';

interface QuantityButtonProps {
  initialQuantity: number;
  onChange?: (quantity: number) => void;
}

export const QuantityButton = ({
  initialQuantity,
  onChange,
}: QuantityButtonProps) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const decrease = () => {
    setQuantity((prev) => {
      const newQuantity = prev - 1;
      onChange?.(newQuantity);
      return newQuantity;
    });
  };

  const increase = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      onChange?.(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className={styles.control}>
      <button
        onClick={decrease}
        className={styles.quantity__button}
        disabled={quantity <= 1}
      >
        <Minus size={16} />
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button onClick={increase} className={styles.quantity__button}>
        <Plus size={16} />
      </button>
    </div>
  );
};
