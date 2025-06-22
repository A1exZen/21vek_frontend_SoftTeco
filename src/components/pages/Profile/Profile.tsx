import { useState } from 'react';
import styles from './styles.module.scss';
import { ProfileLink } from './components/ProfileLink';

import UserIcon from '@assets/icons/profile/user.svg';
import BusinessIcon from '@assets/icons/profile/business.svg';
import toast from 'react-hot-toast';
import { ProfileInfo } from './components/ProfileInfo';

import { useAppDispatch } from '@/hooks/reduxHooks';
import { setTypeUser } from '@/store/slices/auth.slice';
import { ProfileAddress } from './components/ProfileAddress';
import { Addresses, UserType } from '@/models/user/api';
import { Address } from './components/Address';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';
import { getAddresses } from '@/api/user';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { getMs } from '@/utils/helpers/getMs';

const Profile = () => {
  const [isBusiness, setBusiness] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useAuthCheck();

  const { data: addressees } = useQuery<Addresses>({
    queryKey: [QueryKeys.GET_ADDRESSES],
    queryFn: async () => await getAddresses(),
    staleTime: getMs('min', 3),
    initialData: []
  });

  const changeAccountType = (value: boolean) => {
    setBusiness(value);
    if (value) {
      toast.success('Вы успешно переключились на личный аккаунт', {
        id: 'changeAccount',
        position: 'bottom-center',
      });
      dispatch(setTypeUser(UserType.USER));
    } else {
      toast.success('Вы успешно переключились на бизнес-аккаунт', {
        id: 'changeAccount',
        position: 'bottom-center',
      });
      dispatch(setTypeUser(UserType.BUSINESS));
    }
  };

  return (
    <div className="container">
      <div className={styles['profile']}>
        <h2 className={styles['profile__heading']}>Настройка профиля</h2>
        <div
          className={`${styles['profile__change-account']} ${styles['change-account']}`}
        >
          <h3 className={styles['change-account__heading']}>Смена аккаунта</h3>
          <p className={styles['change-account__label']}>
            Выберите аккаунт, с которого хотели бы совершать покупки
          </p>
          <div className={styles['change-account__links']}>
            <ProfileLink
              Icon={<UserIcon />}
              title="Личный аккаунт"
              label="Совершайте покупки через ваш
            персональный аккаунт"
              className={styles['change-account__user_active']}
              isActive={isBusiness}
              cb={() => changeAccountType(false)}
            />
            <ProfileLink
              Icon={<BusinessIcon />}
              title="Бизнес-аккаунт"
              label="Добавляйте организации и оплачивайте
                товары по безналу"
              className={styles['change-account__business_active']}
              isActive={!isBusiness}
              cb={() => changeAccountType(true)}
            />
          </div>
        </div>
        <ProfileInfo />
        <ProfileAddress />
        {addressees?.map((address) => (
          <Address key={address.idAdress} address={address} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
