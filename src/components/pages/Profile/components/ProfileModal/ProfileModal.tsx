import styles from './styles.module.scss';
import { GENDER, UserUpdateRequest } from '@/models/user/api';
import { Modal } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { useAppSelector } from '@/hooks/reduxHooks';
import { JSX } from 'react';

import { useUpdateUser } from '@/hooks/useUpdateUser';

import { DatePicker, Input } from 'antd';
import Regexs from '@/constants/regexes';
import Button from '@/components/ui/Button';
import FormErrorMessage from '@/components/ui/FormErrorMessage';
import { DATE_FORMAT } from './constants';

type ProfileModalProps = {
  title: string;
  label?: string;
  fields: 'personal-data' | 'tel' | 'mail' | 'pass';
  isOpen: boolean;
  onClose: () => void;
};

type ContentKeys = ProfileModalProps['fields'];

type UpdateForm = UserUpdateRequest & {
  repeatNewPassword?: string;
};

export const ProfileModal = ({
  title,
  label,
  fields,
  onClose,
  isOpen,
}: ProfileModalProps) => {
  const { update: updateUser } = useUpdateUser();
  const { user } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    control,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm<UpdateForm>({
    defaultValues: {
      name: user?.name,
      birthday: user?.birthday,
      gender: user?.gender,
      mail: user?.mail,
      tel: user?.tel,
    },
    mode: 'onChange',
  });

  const updateSubmit = (data: UserUpdateRequest) => updateUser.mutate(data);

  const formContent = (field: ContentKeys) => {
    const content: Record<ContentKeys, () => JSX.Element> = {
      'personal-data': () => (
        <>
          <label htmlFor="name" className={styles['modal-form__inp-label']}>
            Имя
            <Controller
              name="name"
              control={control}
              rules={{
                required: 'Поле обязательное',
                pattern: {
                  value: Regexs.NAME,
                  message: 'Корректно ведите данные',
                },
              }}
              render={({ field }) => (
                <>
                  <Input id="name" {...field} placeholder="Имя" />
                  {errors.name && (
                    <p className={styles['modal-form__error']}>
                      {errors.name.message}
                    </p>
                  )}
                </>
              )}
            />
          </label>

          <div className={styles['modal-form__inp-label']}>
            Пол
            <div className={styles['modal-form__radio-inp']}>
              <label htmlFor="male" className={styles['modal-form__radio']}>
                <input
                  type="radio"
                  id="male"
                  value={GENDER.MALE}
                  {...register('gender')}
                />
                Мужчина
              </label>
              <label htmlFor="female" className={styles['modal-form__radio']}>
                <input
                  type="radio"
                  id="female"
                  value={GENDER.FEMALE}
                  {...register('gender')}
                />
                Женщина
              </label>
            </div>
          </div>
          <label htmlFor="date" className={styles['modal-form__inp-label']}>
            Дата рождения
            <Controller
              name="birthday"
              control={control}
              render={({ field }) => (
                <>
                  <DatePicker id="date" {...field} format={DATE_FORMAT} />
                  {errors.birthday && (
                    <p className={styles['modal-form__error']}>
                      {errors.birthday.message}
                    </p>
                  )}
                </>
              )}
            />
          </label>
        </>
      ),
      tel: () => (
        <>
          <label htmlFor="tel" className={styles['modal-form__inp-label']}>
            Телефон
            <Controller
              name="tel"
              control={control}
              rules={{
                required: 'Поле обязательное',
                pattern: {
                  value: Regexs.PHONE,
                  message: 'Корректно ведите данные',
                },
              }}
              render={({ field }) => (
                <>
                  <Input id="tel" {...field} />
                  {errors.tel && (
                    <p className={styles['modal-form__error']}>
                      {errors.tel.message}
                    </p>
                  )}
                </>
              )}
            />
          </label>
        </>
      ),
      mail: () => (
        <>
          <label htmlFor="mail" className={styles['modal-form__inp-label']}>
            Новая электронная почта
            <Controller
              name="mail"
              control={control}
              rules={{
                required: 'Поле обязательное',
                pattern: {
                  value: Regexs.EMAIL,
                  message: 'Корректно ведите данные',
                },
              }}
              render={({ field }) => (
                <>
                  <Input id="mail" {...field} />
                  {errors.mail && (
                    <p className={styles['modal-form__error']}>
                      {errors.mail.message}
                    </p>
                  )}
                </>
              )}
            />
          </label>
          <label htmlFor="password" className={styles['modal-form__inp-label']}>
            Пароль
            <Controller
              name="password.oldPassword"
              control={control}
              rules={{
                required: 'Поле обязательное',
                pattern: {
                  value: Regexs.PASSWORD,
                  message: 'Корректно ведите данные',
                },
              }}
              render={({ field }) => (
                <>
                  <Input.Password id="password" {...field} />
                  {errors.password?.oldPassword && (
                    <FormErrorMessage
                      message={errors.password.oldPassword.message!}
                    />
                  )}
                </>
              )}
            />
          </label>
        </>
      ),
      pass: () => (
        <>
          <label
            htmlFor="oldPassword"
            className={styles['modal-form__inp-label']}
          >
            Текущий пароль
            <Controller
              name="password.oldPassword"
              control={control}
              rules={{
                required: 'Поле обязательное',
                pattern: {
                  value: Regexs.PASSWORD,
                  message: 'Корректно ведите данные',
                },
              }}
              render={({ field }) => (
                <>
                  <Input.Password id="oldPassword" {...field} />
                  {errors.password?.oldPassword && (
                    <FormErrorMessage
                      message={errors.password.oldPassword.message!}
                    />
                  )}
                </>
              )}
            />
          </label>
          <label
            htmlFor="newPassword"
            className={styles['modal-form__inp-label']}
          >
            Новый пароль
            <Controller
              name="password.newPassword"
              control={control}
              rules={{
                required: 'Поле обязательное',
                pattern: {
                  value: Regexs.PASSWORD,
                  message: 'Корректно ведите данные',
                },
                validate: (value) => {
                  if (value === getValues('password.oldPassword')) {
                    return 'Новый пароль не должен совпадать с текущим';
                  }
                  return true;
                },
              }}
              render={({ field }) => (
                <>
                  <Input.Password id="newPassword" {...field} />
                  {errors.password?.newPassword && (
                    <FormErrorMessage
                      message={errors.password.newPassword.message!}
                    />
                  )}
                </>
              )}
            />
          </label>
          <label
            htmlFor="repeatNewPassword"
            className={styles['modal-form__inp-label']}
          >
            Повторите новый пароль
            <Controller
              name="repeatNewPassword"
              control={control}
              rules={{
                required: 'Поле обязательное',
                validate: (value) => {
                  if (value !== watch('password.newPassword')) {
                    return 'Пароли не совпадают';
                  }
                  return true;
                },
              }}
              render={({ field }) => (
                <>
                  <Input.Password id="repeatNewPassword" {...field} />
                  {errors.repeatNewPassword && (
                    <FormErrorMessage
                      message={errors.repeatNewPassword.message!}
                    />
                  )}
                </>
              )}
            />
          </label>
        </>
      ),
    };
    return content[field];
  };

  return (
    <Modal open={isOpen} onCancel={onClose} footer={null}>
      <form
        onSubmit={handleSubmit(updateSubmit)}
        className={styles['modal-form']}
      >
        <h3 className={styles['modal-form__title']}>{title}</h3>
        {label && <p className={styles['modal-form__title-label']}>{label}</p>}
        <div className={styles['modal-form__content']}>
          {formContent(fields)()}
        </div>
        <Button
          type="submit"
          disabled={!isValid}
          className={styles['modal-form__btn']}
          color="first"
          variant="solid"
        >
          Сохранить
        </Button>
      </form>
    </Modal>
  );
};
