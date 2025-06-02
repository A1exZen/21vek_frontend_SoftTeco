import styles from './styles.module.scss';
import { ToastProps } from './types';
import { useState, useEffect } from 'react';
import { useNotificationIcon } from '@/hooks/useSetNotificationIcon';

import { getMs } from '@/utils/helpers/getMs';

export const Toast = ({ type, title, message }: ToastProps) => {
  //* переменная для значения TIMER, через сколько тостер уйдет
  const TIMER: number = getMs('sec', 3);
  const [isVisible, setVisible] = useState<boolean>(true);

  const { setNotificationIcon } = useNotificationIcon();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), TIMER);
    return () => clearTimeout(timer);
  }, [TIMER]);

  const Icon: React.ReactNode = setNotificationIcon(type);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles['toast']}>
      <div className={styles['toast__icon']}>{Icon}</div>
      <div className={styles['toast__info']}>
        <p className={styles['toast__title']}>{title}</p>
        <p className={styles['toast__message']}>{message}</p>
      </div>
    </div>
  );
};
