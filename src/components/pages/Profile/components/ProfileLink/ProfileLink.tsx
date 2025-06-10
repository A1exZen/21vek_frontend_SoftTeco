import React from 'react';
import styles from './styles.module.scss';
import { cc } from '@/utils/combineClasses';

type Props = {
  title: string;
  label: string;
  Icon: React.ReactNode;
  isActive: boolean;
  className?: string;
  cb: () => void;
};

export const ProfileLink = ({
  title,
  label,
  Icon,
  isActive,
  className,
  cb,
}: Props) => {
  return (
    <button
      type="button"
      className={
        isActive
          ? `${styles['profile-link']}`
          : cc(styles['profile-link'], className)
      }
      onClick={cb}
    >
      {Icon}
      <div className={styles['profile-link__description']}>
        <p className={styles['profile-link__title']}>{title}</p>
        <p className={styles['profile-link__label']}>{label}</p>
      </div>
    </button>
  );
};
