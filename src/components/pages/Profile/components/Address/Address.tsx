import styles from './styles.module.scss';
import type { AddressProps } from './types';
import { MapPinHouse, Trash, Pen, MessageCircleQuestion } from 'lucide-react';
import { useAddress } from '@/hooks/useAddress';
import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import { ModalChangeAddress } from '../ModalChangeAddress';

export const Address = ({ address }: AddressProps) => {
  const { deleteAddressMutation } = useAddress();
  const [isOpen, setOpen] = useState<boolean>(false);

  //   const changeAddress = () => {};

  const deleteAddress = () => {
    toast(() => (
      <span className={styles['toast-delete']}>
        <p className={styles['toast-delete__q']}>
          <MessageCircleQuestion /> Вы точно хотите удалить адрес?
        </p>
        <Button
          className={styles['address-delete__btn']}
          onClick={() => deleteAddressMutation.mutate(address.id)}
        >
          Да
        </Button>
      </span>
    ));
  };

  return (
    <>
      <div className={styles['address']}>
        {address.isMain && <MapPinHouse />}
        <div className={styles['address__description']}>
          <p
            className={
              address.isMain
                ? `${styles['address__type']} ${styles['address__type_main']}`
                : `${styles['address__type']}`
            }
          >
            {address.isMain
              ? 'Основной адрес доставки'
              : 'Дополнительные адреса'}
          </p>
          <p className={styles['address__address']}>
            <span>г.{address.settlement},</span>
            <span>ул.{address.street},</span>
            <span>под.{address.entrance}</span>
            <span>эт.{address.flor}</span>
          </p>
        </div>
        <div className={styles['address__actions']}>
          <Pen
            color="#07c"
            size={44}
            className={styles['address__upd']}
            onClick={() => setOpen(true)}
          />
          <Trash
            size={24}
            color="var(--pink-500)"
            onClick={() => deleteAddress()}
          />
        </div>
      </div>
      {isOpen && (
        <ModalChangeAddress
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          address={address}
        />
      )}
    </>
  );
};
