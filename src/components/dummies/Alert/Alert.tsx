import styles from './styles.module.scss';
import { AlertProps } from './types';
import { useState } from 'react';

import { useNotificationIcon } from '@/hooks/useSetNotificationIcon';

import CrossIcon from '@assets/icons/cross.svg';

export const Alert = ({ type, title, message }: AlertProps) => {
  const { setNotificationIcon } = useNotificationIcon();
  const [isVisible, setVisible] = useState<boolean>(true);

  const Icon: React.ReactNode = setNotificationIcon(type);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles['alert']}>
      <div className={styles['alert__icon']}>{Icon}</div>
      <div className={styles['alert__info']}>
        <p className={styles['alert__title']}>{title}</p>
        <p className={styles['alert__message']}>{message}</p>
      </div>
      <button
        type="button"
        className={styles['alert__close-btn']}
        onClick={() => setVisible(false)}
      >
        <CrossIcon />
      </button>
    </div>
  );
};
