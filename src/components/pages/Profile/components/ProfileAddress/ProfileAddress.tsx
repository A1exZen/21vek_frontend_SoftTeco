import styles from './styles.module.scss';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { AddressModal } from '../AddressModal';

export const ProfileAddress = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className={styles['profile-address']}>
        <div className={styles['profile-address__headings']}>
          <h4 className={styles['profile-address__title']}>Адреса</h4>
          <p className={styles['profile-address__label']}>
            Вы можете добавить до 10 адресов и сделать один из них основным
          </p>
        </div>
        <button
          className={styles['profile-address__btn']}
          onClick={() => setOpen(true)}
        >
          <Plus color="var(--blue-500)" />
          Добавить
        </button>
      </div>
      {isOpen && (
        <AddressModal onClose={() => setOpen(false)} isOpen={isOpen} />
      )}
    </>
  );
};
