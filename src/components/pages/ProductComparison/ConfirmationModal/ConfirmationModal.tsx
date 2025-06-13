import styles from './styles.module.scss';
import { IConfirmationModalProps } from '../types';
import { useEffect } from 'react';

export const ConfirmationModal = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  message
}: IConfirmationModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal"]}>
        <h3 className={styles["modal-title"]}>{title}</h3>
        <p className={styles["modal-message"]}>{message}</p>
        <div className={styles["modal-actions"]}>
          <button 
            onClick={onCancel} 
            className={styles["cancel-button"]}
          >
            Отмена
          </button>
          <button 
            onClick={onConfirm} 
            className={styles["confirm-button"]}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};