import styles from './styles.module.scss';

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  message: string;
}

export const ConfirmationModal = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  message
}: ConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal"]}>
        <h3>{title}</h3>
        <p>{message}</p>
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