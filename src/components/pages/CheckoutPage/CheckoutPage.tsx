import styles from './styles.module.scss';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Button from '@components/ui/Button';
import { Store, Truck, X } from 'lucide-react';
import Logo from '@assets/icons/main-logo.png';
import { PATHS } from '@/constants';
import checkoutImage from '@images/checkout-image.png';
import { Input } from 'antd';

const { TextArea } = Input;
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { setDrawerOpen, setModalOpen } from '@store/slices/basket.slice';
import { CheckoutPickupModal } from '@pages/CheckoutPage/CheckoutPickupModal';
import { DeliveryPointDrawer } from '@pages/CheckoutPage/DeliveryPointDrawer';
import { setComment } from '@store/slices/checkout.slice';
import { useCheckout } from '@hooks/useCheckout';
import { deliveryAddresses } from '@pages/CheckoutPage/DeliveryPointDrawer/constants.ts';

type CheckoutPageProps = {
  price: number;
};

export const CheckoutPage = ({ price }: CheckoutPageProps) => {
  const dispatch = useAppDispatch();
  const address = useAppSelector((state) => state.checkout.address);
  const comment = useAppSelector((state) => state.checkout.comment);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { mutate: placeOrder } = useCheckout();

  const handleCheckout = () => {
    placeOrder({
      comment: comment,
      adress:
        deliveryAddresses.find(({ value }) => value === address)?.label || '',
      shippingCost: 0,
    });
    searchParams.delete('action');
    navigate('/');
  };

  const handleClose = () => {
    searchParams.delete('action');
    navigate({ search: searchParams.toString() });
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__header}>
        <Link to={PATHS.HOME}>
          <img
            src={Logo}
            alt="Логотип"
            className={styles['checkout__header-logo']}
          />
        </Link>
        <Button
          className={styles['checkout__close-button']}
          icon={<X size={22} color="var(--gray-600)" />}
          variant="rounded"
          onClick={handleClose}
        ></Button>
      </div>
      <div className={styles.checkout__content}>
        <div className={styles.checkout__image}>
          <img src={checkoutImage} alt="Картинка оформления заказа" />
        </div>
        <div className={styles['checkout__delivery-data']}>
          <h3>Данные для доставки</h3>
          <div className={styles.checkout__form}>
            <div className={styles['checkout__form-block']}>
              <label className={styles.checkout__text}>Способ доставки</label>
              <div className={styles['checkout__delivery-buttons']}>
                <button
                  className={styles['checkout__delivery-button']}
                  onClick={() => dispatch(setModalOpen(true))}
                >
                  <Store />
                  <span>Самовывоз</span>
                  <span>Бесплатно</span>
                </button>
                <button
                  className={styles['checkout__delivery-button']}
                  onClick={() => dispatch(setDrawerOpen(true))}
                >
                  <Truck />
                  <span>Курьером</span>
                  <span>Бесплатно</span>
                </button>
              </div>
            </div>
            <div className={styles['checkout__form-block']}>
              <label className={styles.checkout__text}>Телефон для связи</label>
              <Input
                placeholder="Введите телефон"
                className={styles.checkout__input}
              />
            </div>
            <div className={styles['checkout__form-block']}>
              <label className={styles.checkout__text}>Комментарий</label>
              <TextArea
                style={{ height: 102, resize: 'none' }}
                className={styles.checkout__input}
                value={comment}
                onChange={(e) => dispatch(setComment(e.target.value))}
              />
            </div>
          </div>
          <div className={styles.checkout__summary}>
            <div className={styles.checkout__total}>
              <span className={styles['checkout__total-amount']}>
                {price.toFixed(2).replace('.', ',')} р.
              </span>
              <span className={styles.checkout__text}>Стоимость заказа</span>
            </div>
            <Button onClick={handleCheckout}>Заказать</Button>
          </div>
        </div>
        <CheckoutPickupModal />
        <DeliveryPointDrawer />
      </div>
    </div>
  );
};
