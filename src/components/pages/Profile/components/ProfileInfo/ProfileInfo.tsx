import styles from './styles.module.scss';
import { useAppSelector } from '@/hooks/reduxHooks';

import { User, PhoneCall, Mail, Pen, Lock, Dot } from 'lucide-react';
import { useState } from 'react';
import { ProfileModal } from '../ProfileModal';

type ModalConfig = {
  title: string;
  fields: 'personal-data' | 'tel' | 'mail' | 'pass';
  label?: string;
} | null;

export const ProfileInfo = () => {
  const NUMBER_OF_DOTS = 8;
  const { user } = useAppSelector((state) => state.auth);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<ModalConfig>(null);

  const handleOpenModal = (
    title: string,
    fields: 'personal-data' | 'tel' | 'mail' | 'pass',
    label?: string,
  ) => {
    setModalConfig({ title, fields, label });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalConfig(null);
  };

  return (
    <div className={styles['profile-info']}>
      <h2 className={styles['profile-info__heading']}>Персональные данные</h2>

      <div className={styles['profile-info__data']}>
        <div className={styles['profile-info__data-item']}>
          <User size={24} />
          <div className={styles['profile-info__item-info']}>
            <p className={styles['profile-info__label']}>Имя</p>
            <p
              className={
                user?.name
                  ? styles['profile-info__user-info']
                  : `${styles['profile-info__user-info']} ${styles['profile-info__user-info_null']}`
              }
            >
              {user?.name ? user.name : '-'}
            </p>
          </div>
          <div className={styles['profile-info__item-info']}>
            <p className={styles['profile-info__label']}>Пол</p>
            <p
              className={
                user?.gender
                  ? styles['profile-info__user-info']
                  : `${styles['profile-info__user-info']} ${styles['profile-info__user-info_null']}`
              }
            >
              {user?.gender ? user.gender : '-'}
            </p>
          </div>
          <div className={styles['profile-info__item-info']}>
            <p className={styles['profile-info__label']}>Дата рождения</p>
            <p
              className={
                user?.birthday
                  ? styles['profile-info__user-info']
                  : `${styles['profile-info__user-info']} ${styles['profile-info__user-info_null']}`
              }
            >
              {user?.birthday ? user.birthday : '-'}
            </p>
          </div>
          <Pen
            color="#07c"
            size={24}
            className={styles['profile-info__upd-btn']}
            onClick={() =>
              handleOpenModal('Изменение профиля', 'personal-data')
            }
          />
        </div>

        <div className={styles['profile-info__data-item']}>
          <PhoneCall size={24} />
          <div className={styles['profile-info__item-info']}>
            <p className={styles['profile-info__label']}>Телефон</p>
            <p
              className={
                user?.tel
                  ? styles['profile-info__user-info']
                  : `${styles['profile-info__user-info']} ${styles['profile-info__user-info_null']}`
              }
            >
              {user?.tel ? user.tel : '-'}
            </p>
          </div>
          <Pen
            color="#07c"
            size={24}
            className={styles['profile-info__upd-btn']}
            onClick={() =>
              handleOpenModal(
                'Изменение основного телефона',
                'tel',
                'Это даст возможность заходить в личный кабинет по номеру телефона и защитит вас от взлома.',
              )
            }
          />
        </div>

        <div className={styles['profile-info__data-item']}>
          <Mail size={24} />
          <div className={styles['profile-info__item-info']}>
            <p className={styles['profile-info__label']}>Почта</p>
            <p
              className={
                user?.mail
                  ? styles['profile-info__user-info']
                  : `${styles['profile-info__user-info']} ${styles['profile-info__user-info_null']}`
              }
            >
              {user?.mail ? user.mail : '-'}
            </p>
          </div>
          <Pen
            color="#07c"
            size={24}
            className={styles['profile-info__upd-btn']}
            onClick={() =>
              handleOpenModal(
                'Изменение почты',
                'mail',
                `Для изменения вашей почты «${user?.mail}» нужно ввести текущий пароль.`,
              )
            }
          />
        </div>

        <div className={styles['profile-info__data-item']}>
          <Lock size={24} />
          <div className={styles['profile-info__item-info']}>
            <p className={styles['profile-info__label']}>Пароль</p>
            <p className={styles['profile-info__user-info']}>
              {Array(NUMBER_OF_DOTS)
                .fill(null)
                .map((_, index) => (
                  <Dot key={index} size={30} color="black" fill="black" />
                ))}
            </p>
          </div>
          <Pen
            color="#07c"
            size={24}
            className={styles['profile-info__upd-btn']}
            onClick={() => handleOpenModal('Изменение пароля', 'pass')}
          />
        </div>
      </div>

      {isModalOpen && modalConfig && (
        <ProfileModal
          title={modalConfig.title}
          label={modalConfig.label}
          isOpen={isModalOpen}
          fields={modalConfig.fields}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
