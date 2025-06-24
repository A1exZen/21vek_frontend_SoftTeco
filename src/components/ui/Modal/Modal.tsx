import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';
import Button from '@components/ui/Button';
import { X } from 'lucide-react';

interface ModalProps {
  children: ReactNode;
  open: boolean;
  openChangedAction: (value: boolean) => void;
  fullscreen?: boolean;
  className?: string;
  noPadding?: boolean;
}

export const Modal: FC<ModalProps> = ({
  children,
  open,
  openChangedAction,
  fullscreen = false,
  className = '',
  noPadding = false,
}) => {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        openChangedAction(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, openChangedAction]);

  const closeModal = () => {
    openChangedAction(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    open &&
    ReactDOM.createPortal(
      <div
        role="dialog"
        className={styles.modal__overlay}
        onClick={handleOverlayClick}
      >
        <div
          className={`${styles.modal} ${fullscreen ? styles['modal--fullscreen'] : ''} ${className}`}
        >
          <div
            className={`${styles.modal__content} ${noPadding ? styles['modal__content--no-padding'] : ''}`}
          >
            <Button
              icon={<X size={22} color="var(--gray-600)" />}
              variant="rounded"
              onClick={closeModal}
              className={styles['modal__close-button']}
            />
            {children}
          </div>
        </div>
      </div>,
      document.body,
    )
  );
};
