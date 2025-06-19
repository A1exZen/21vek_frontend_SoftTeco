import React, { useCallback, useEffect } from 'react';
import styles from './styles.module.scss';
import { X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { setDrawerOpen } from '@store/slices/basket.slice';
import { Select, DatePicker, Space } from 'antd';
import {
  deliveryAddresses,
  deliveryOptions,
} from '@pages/CheckoutPage/DeliveryPointDrawer/constants';
import Button from '@components/ui/Button';

export const DeliveryPointDrawer = () => {
  const isDrawerOpen = useAppSelector((state) => state.basket.isDrawerOpen);
  const dispatch = useAppDispatch();

  const closeDrawer = useCallback(() => {
    dispatch(setDrawerOpen(false));
  }, [dispatch]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeDrawer();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    };

    if (isDrawerOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen, closeDrawer]);

  return (
    <div
      className={`${styles.drawer__overlay} ${isDrawerOpen ? styles.drawer__open : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={styles.drawer}>
        <div className={styles.drawer__header}>
          <X
            size={22}
            color="var(--gray-600)"
            onClick={closeDrawer}
            className={styles['drawer__close-button']}
          />
          <span className={styles['drawer__header-text']}>Курьером</span>
        </div>
        <div className={styles.drawer__content}>
          <div className={styles['drawer__form-block']}>
            <label className={styles['drawer__form-text']}>
              Выберите адрес доставки
            </label>
            <Select
              defaultValue={deliveryAddresses[0].value}
              options={deliveryAddresses}
              className={styles.drawer__select}
            ></Select>
          </div>
          <div className={styles['drawer__form-block']}>
            <label className={styles['drawer__form-text']}>Дата доставки</label>
            <Space
              direction="vertical"
              className={styles['drawer__data-picker']}
            >
              <DatePicker className={styles['drawer__data-picker']} />
            </Space>
          </div>
          <div className={styles['drawer__form-block']}>
            <label className={styles['drawer__form-text']}>
              Время и стоимость доставки
            </label>
            <Select
              defaultValue={deliveryOptions[0].value}
              options={deliveryOptions}
              className={styles.drawer__select}
            ></Select>
          </div>
          <Button
            onClick={closeDrawer}
            className={styles['drawer__close-button']}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};
