import styles from './styles.module.scss';
import { Minus, Plus } from 'lucide-react';

interface QuantityButtonProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

export const QuantityButton = ({ quantity, onChange }: QuantityButtonProps) => {
  const decrease = () => {
    onChange(quantity - 1);
  };

  const increase = () => {
    onChange(quantity + 1);
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
