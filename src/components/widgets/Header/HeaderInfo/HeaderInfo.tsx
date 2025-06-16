import DropdownMenu from '@/components/dummies/DropdownMenu';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

import Location from '@/assets/icons/location.svg';
import Mail from '@/assets/icons/mail.svg';
import Message from '@/assets/icons/message.svg';
import Partpay from '@/assets/icons/part-pay.svg';
import PhoneCall from '@/assets/icons/phone-call.svg';
import Phone from '@/assets/icons/phone.svg';
import A1 from '@/assets/icons/social-media/a1.svg';
import Life from '@/assets/icons/social-media/life.svg';
import Telegram from '@/assets/icons/social-media/telegram.svg';
import Toolbox from '@/assets/icons/toolbox.svg';
import { HEADER_NAV } from '@components/widgets/Header/HeaderInfo/constants.ts';
import { useUserLocation } from '@components/widgets/Header/HeaderInfo/useUserLocation.ts';

export const HeaderInfo = () => {
  const { data: cityData, isLoading, isError } = useUserLocation();
  const { customerItems, phoneItems } = HEADER_NAV;

  const phoneItemsWithIcons = [
    { ...phoneItems[0], icon: <Life /> },
    { ...phoneItems[1], icon: <Phone /> },
    { ...phoneItems[2], icon: <Telegram /> },
    { ...phoneItems[3], icon: <Mail /> },
    { ...phoneItems[4], icon: <PhoneCall /> },
    { ...phoneItems[5], icon: <Message /> },
  ];

  return (
    <div className={styles['header-info']}>
      <div className="container">
        <div className={styles['header-info__content']}>
          <div className={styles['header-info__locality']}>
            <Location />
            {isLoading
              ? 'Определяем...'
              : cityData?.city || 'Неизвестный город'}
            {isError && 'Город не определен'}
          </div>

          <nav className={styles['header-info__nav']}>
            <div className={styles['header-info__nav-list']}>
              <Link to="/" className={styles['header-info__nav-link']}>
                <Toolbox />
                Для бизнеса
              </Link>
              <Link to="/" className={styles['header-info__nav-link']}>
                <Partpay />
                Оплата частями
              </Link>
              <DropdownMenu title="Покупателям" items={customerItems} />
            </div>

            <div className={styles['header-info__contacts']}>
              <a
                href="https://t.me/lesha_zenchik"
                target="_blank"
                rel="noopener noreferrer"
                className={styles['header-info__contact']}
              >
                <Telegram />
                Telegram
              </a>
              <a
                href="tel:+375296330631"
                className={styles['header-info__contact']}
              >
                <A1 />
                +375 29 633 0631
              </a>

              <DropdownMenu title="Еще" items={phoneItemsWithIcons} />
            </div>
          </nav>

          <p className={styles['header-info__working-time']}>
            контакт-центр <br /> с 8.00 до 22.00
          </p>
        </div>
      </div>
    </div>
  );
};
