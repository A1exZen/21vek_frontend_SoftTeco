import React from 'react';
import styles from './styles.module.scss';
import { useOrderHistory } from '@hooks/useCheckout.ts';

export const OrderHistory: React.FC = () => {
  const { data, isLoading, error } = useOrderHistory();
  console.log('Order history', data);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Загрузка истории заказов...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>Ошибка при загрузке истории заказов</div>
      </div>
    );
  }

  if (!data?.orders || data.orders.length === 0) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>История заказов</h1>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📦</div>
          <div className={styles.emptyTitle}>У вас пока нет заказов</div>
          <div className={styles.emptyText}>
            Когда вы сделаете первый заказ, он появится здесь
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>История заказов</h1>
      <div className={styles.ordersList}>
        {data.orders.map((orderGroup) => (
          <div key={orderGroup.groupId} className={styles.orderGroup}>
            <div className={styles.orderHeader}>
              <div className={styles.orderTitle}>
                Заказ № {orderGroup.groupId}
              </div>
              <div className={styles.orderDate}>{formatDate(orderGroup.dateCreated)}</div>
            </div>

            <div className={styles.orderItems}>
              {orderGroup.orders.map((item) => (
                <div key={item.orderId} className={styles.orderItem}>
                  <div className={styles.itemRow}>
                    <div className={styles.itemName}>{item.productName}</div>
                    <div className={styles.itemPrice}>
                      {item.price * item.count}
                    </div>
                  </div>
                  <div className={styles.itemDetails}>
                    <span>{item.count} шт</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.orderSummary}>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Доставка</span>
                <span className={styles.summaryLabel}>
                  Бесплатно
                </span>
              </div>
              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span className={styles.summaryLabel}>Итого к оплате</span>
                <span className={styles.summaryValue}>
                  {orderGroup.processor.totalPrice}
                </span>
              </div>

              {/*<div className={styles.orderInfo}>*/}
              {/*  <div className={styles.infoRow}>*/}
              {/*    <span className={styles.infoLabel}>Статус:</span>*/}
              {/*    <span className={styles.infoValue}>*/}
              {/*      <span className={`${styles.orderStatus}`}>*/}
              {/*        {orderGroup.processor.status}*/}
              {/*      </span>*/}
              {/*    </span>*/}
              {/*  </div>*/}
              {/*  {orderGroup.processor.adress && (*/}
              {/*    <div className={styles.infoRow}>*/}
              {/*      <span className={styles.infoLabel}>Адрес:</span>*/}
              {/*      <span className={styles.infoValue}>*/}
              {/*        {orderGroup.processor.adress}*/}
              {/*      </span>*/}
              {/*    </div>*/}
              {/*  )}*/}
              {/*  {orderGroup.processor.comment && (*/}
              {/*    <div className={styles.infoRow}>*/}
              {/*      <span className={styles.infoLabel}>Комментарий:</span>*/}
              {/*      <span className={styles.infoValue}>*/}
              {/*        {orderGroup.processor.comment}*/}
              {/*      </span>*/}
              {/*    </div>*/}
              {/*  )}*/}
              {/*</div>*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
