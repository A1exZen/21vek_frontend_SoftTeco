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
  message = "Товар удален",
  undoText = "Отменить",
  duration = 3000,
  onUndo,
  onComplete
}: UndoNotificationProps) => {
  const [progress, setProgress] = useState(100);
  const [show, setShow] = useState(true);

  const handleComplete = useCallback(() => {
    setShow(false);
    setTimeout(() => onComplete(), 0);
  }, [onComplete]);

  const handleUndo = useCallback(() => {
    setShow(false);
    setTimeout(() => onUndo(), 0);
  }, [onUndo]);

  useEffect(() => {
    if (!show) return;

    const step = 100 / (duration / 30);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          handleComplete();
          return 0;
        }
        return prev - step;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [duration, handleComplete, show]);

  if (!show) return;

  return (
    <div className={styles.notification}>
      <div className={styles.content}>
        <span>{message}</span>
        <button 
          onClick={handleUndo}
          className={styles.undo__button}
        >
          {undoText}
        </button>
      </div>
      <div 
        className={styles['progress-bar']}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default UndoNotification;