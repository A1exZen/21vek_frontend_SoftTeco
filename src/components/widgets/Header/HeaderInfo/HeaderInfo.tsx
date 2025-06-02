import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import DropdownMenu from '@/components/dummies/DropdownMenu';
import { Divider } from 'antd';
import { useUserLocation } from '@/components/widgets/Header/HeaderInfo/useUserLocation';
import { HEADER_NAV } from './constants';

import Location from '@/assets/icons/location.svg';
import Toolbox from '@/assets/icons/toolbox.svg';
import PartPay from '@/assets/icons/part-pay.svg';
import Telegram from '@/assets/icons/social-media/telegram.svg';
import Telegram1 from '@/assets/icons/social-media/telegram1.svg';
import A1 from '@/assets/icons/social-media/A1.svg';
import Life from '@/assets/icons/social-media/life.svg';
import Phone from '@/assets/icons/phone.svg';
import Mail from '@/assets/icons/mail.svg';
import PhoneCall from '@/assets/icons/phone-call.svg';
import Message from '@/assets/icons/message.svg';
import { cc } from '@/utils/combineClasses';

const HeaderInfo = () => {
  const { data: cityData, isLoading, isError } = useUserLocation();
  const { customerItems, phoneItems } = HEADER_NAV;

  const phoneItemsWithIcons = [
    { ...phoneItems[0], icon: <Life /> },
    { ...phoneItems[1], icon: <Phone /> },
    { ...phoneItems[2], icon: <Telegram1 /> },
    { ...phoneItems[3], icon: <Mail /> },
    { ...phoneItems[4], icon: <PhoneCall /> },
    { ...phoneItems[5], icon: <Message /> },
  ];

  return (
    <div
      className={cc(
        styles['header-info__container'],
        styles['header-info__text'],
      )}
    >
      <div className={styles['locality-block']}>
        <Location />
        <div className={styles['header-info__text']}>
          {isLoading ? (
            <span className={cc(styles.loading, styles['header-info__text'])}>
              Определяем...
            </span>
          ) : isError ? (
            <span className={cc(styles.error, styles['header-info__text'])}>
              Город не определён
            </span>
          ) : (
            cityData?.city || 'Unknown City'
          )}
        </div>
      </div>

      <div className={styles['header-nav__container']}>
        <nav className={styles['nav']}>
          <ul className={styles['nav-list']}>
            <li className={styles['nav-item']}>
              <Toolbox />
              <Link
                to={HEADER_NAV.navItems[1].path}
                className={styles['nav-link']}
              >
                {HEADER_NAV.navItems[1].title}
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <PartPay />
              <Link
                to={HEADER_NAV.navItems[0].path}
                className={styles['nav-link']}
              >
                {HEADER_NAV.navItems[0].title}
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <DropdownMenu
                title={HEADER_NAV.navItems[2].title}
                items={customerItems}
              />
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles['contacts-block']}>
        <div className={styles['contacts-content']}>
          <div className={styles['link-container']}>
            <Telegram />
            <span className={styles['telegram-link']}>
              <a href={HEADER_NAV.phoneItems[2].href} target="_blank" rel="tg">
                {HEADER_NAV.phoneItems[2].title}
              </a>
            </span>
          </div>
          <div className={styles['link-container']}>
            <A1 />
            <span className={styles['main-phone']}>
              <a href={HEADER_NAV.phoneItems[1].href}>
                {HEADER_NAV.phoneItems[1].title}
              </a>
            </span>
          </div>
          <div className={styles['link-container']}>
            <div className={styles['more-contacts']}>
              <DropdownMenu title="Еще" items={phoneItemsWithIcons} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles['working-time__block']}>
        <Divider type="vertical" />
        <div className={styles['working-time__text']}>
          контакт-центр <br /> с 8.00 до 22.00
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
