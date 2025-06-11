import styles from './styles.module.scss';
import { Input, Modal } from 'antd';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import type { ModalChangeAddressProps, UpdateForm } from './types';
import { useAddress } from '@/hooks/useAddress';
import { AddressRequest } from '@/models/user/api';
import Button from '@/components/ui/Button';
import FormErrorMessage from '@/components/ui/FormErrorMessage';

export const ModalChangeAddress = ({
  onClose,
  address,
  isOpen,
}: ModalChangeAddressProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UpdateForm>({
    defaultValues: {
      aptOffice: address.aptOffice,
      entrance: address.entrance,
      flor: address.flor,
      isMain: address.isMain,
      settlement: address.settlement,
      street: address.street,
    },
  });

  const { changeAddressMutation } = useAddress();

  const onSubmit: SubmitHandler<AddressRequest> = (data: AddressRequest) => {
    changeAddressMutation.mutate(data);
    if (changeAddressMutation.isSuccess) onClose();
  };

  return (
    <Modal footer={null} open={isOpen} onCancel={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
        <h3 className={styles['form__title']}>Добавление адреса</h3>

        <label htmlFor="settlement" className={styles['form__inp-label']}>
          Населенный пункт
          <Controller
            name="settlement"
            control={control}
            rules={{ required: 'Это поле обязательно' }}
            render={({ field }) => (
              <Input {...field} status={errors.settlement ? 'error' : ''} />
            )}
          />
        </label>
        {errors.settlement && (
          <FormErrorMessage message={errors.settlement.message!} />
        )}

        <label htmlFor="street" className={styles['form__inp-label']}>
          Улица, дом
          <Controller
            name="street"
            control={control}
            rules={{ required: 'Это поле обязательно' }}
            render={({ field }) => (
              <Input {...field} status={errors.street ? 'error' : ''} />
            )}
          />
        </label>
        {errors.street && <FormErrorMessage message={errors.street.message!} />}

        <div className={styles['form__row']}>
          <label htmlFor="entrance" className={styles['form__inp-label']}>
            Подъезд
            <Controller
              name="entrance"
              control={control}
              rules={{ required: 'Это поле обязательно' }}
              render={({ field }) => (
                <Input {...field} status={errors.entrance ? 'error' : ''} />
              )}
            />
          </label>
          {errors.entrance && (
            <FormErrorMessage message={errors.entrance.message!} />
          )}

          <label htmlFor="flor" className={styles['form__inp-label']}>
            Этаж
            <Controller
              name="flor"
              control={control}
              rules={{ required: 'Это поле обязательно' }}
              render={({ field }) => (
                <Input {...field} status={errors.flor ? 'error' : ''} />
              )}
            />
          </label>
          {errors.flor && <FormErrorMessage message={errors.flor.message!} />}

          <label htmlFor="aptOffice" className={styles['form__inp-label']}>
            Кв./офис
            <Controller
              name="aptOffice"
              control={control}
              rules={{ required: 'Это поле обязательно' }}
              render={({ field }) => (
                <Input {...field} status={errors.aptOffice ? 'error' : ''} />
              )}
            />
          </label>
          {errors.aptOffice && (
            <FormErrorMessage message={errors.aptOffice.message!} />
          )}
        </div>

        {!address.isMain && (
          <label
            htmlFor="main-address"
            className={styles['form__inp-checkbox']}
          >
            <input type="checkbox" id="main-address" {...register('isMain')} />
            Сделать основным адресом
          </label>
        )}

        <Button
          type="submit"
          disabled={!isValid || changeAddressMutation.isPending}
          className={styles['form__btn']}
          color="first"
          variant="solid"
        >
          {changeAddressMutation.isPending ? 'Добавление...' : 'Добавить'}
        </Button>
      </form>
    </Modal>
  );
};
