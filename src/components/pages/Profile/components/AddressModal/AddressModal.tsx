import styles from './styles.module.scss';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Input, Modal } from 'antd';
import { useAppSelector } from '@/hooks/reduxHooks';
import { AddressRequest } from '@/models/user/api';
import { useAddress } from '@/hooks/useAddress';
import FormErrorMessage from '@/components/ui/FormErrorMessage';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast';

type AddressForm = AddressRequest;

type AddressModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddressModal = ({ isOpen, onClose }: AddressModalProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const { addAddressMutation } = useAddress();
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<AddressForm>({
    mode: 'onChange',
    defaultValues: {
      settlement: '',
      street: '',
      entrance: '',
      flor: '',
      aptOffice: '',
      isMain: false,
    },
  });

  const onSubmit: SubmitHandler<AddressRequest> = async (
    data: AddressRequest,
  ) => {
    if (user && user.address && user?.address?.length >= 10) {
      toast.error('Вы не можете добавить больше 10 адресов');
      return;
    }
    await addAddressMutation.mutate(data);
    if (addAddressMutation.isSuccess) onClose();
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

        {user?.address?.some((address) => address.isMain) && (
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
          disabled={!isValid || addAddressMutation.isPending}
          className={styles['form__btn']}
          color="first"
          variant="solid"
        >
          {addAddressMutation.isPending ? 'Добавление...' : 'Добавить'}
        </Button>
      </form>
    </Modal>
  );
};
