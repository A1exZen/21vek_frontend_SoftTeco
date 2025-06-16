import styles from './styles.module.scss';
import { IConfirmationModalProps } from '../types';

export const ConfirmationModal = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  message
}: IConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles["overlay"]}>
      <div className={styles["modal__overlay"]}>
      <div className={styles["modal"]}>
        <h3 className={styles["modal__title"]}>{title}</h3>
        <p className={styles["modal__message"]}>{message}</p>
        <div className={styles["modal__actions"]}>
          <button 
            onClick={onCancel} 
            className={styles["cancel__button"]}
          >
            Отмена
          </button>
          <button 
            onClick={onConfirm} 
            className={styles["confirm__button"]}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};