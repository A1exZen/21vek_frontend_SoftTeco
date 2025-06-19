import { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.scss';

interface UndoNotificationProps {
  message: string;
  undoText?: string;
  duration?: number;
  onUndo: () => void;
  onComplete: () => void;
}

const UndoNotification = ({
  message = 'Товар удален',
  undoText = 'Отменить',
  duration = 3000,
  onUndo,
  onComplete,
}: UndoNotificationProps) => {
  const [show, setShow] = useState(true);

  const handleComplete = useCallback(() => {
    setShow(false);
    onComplete();
  }, [onComplete]);

  const handleUndoClick = useCallback(() => {
    setShow(false);
    onUndo();
  }, [onUndo]);

  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      handleComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, handleComplete, show]);

  if (!show) return null;

  return (
    <div className={styles.notification}>
      <div className={styles.content}>
        <span>{message}</span>
        <button onClick={handleUndoClick} className={styles.undo__button}>
          {undoText}
        </button>
      </div>
      <div
        className={styles['progress-bar']}
        style={{ animationDuration: `${duration}ms` }}
      ></div>
    </div>
  );
};

export default UndoNotification;
