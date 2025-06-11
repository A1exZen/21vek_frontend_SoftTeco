import { Address, AddressRequest } from '@/models/user/api';

export type ModalChangeAddressProps = {
  isOpen: boolean;
  onClose: () => void;
  address: Address;
};

export type UpdateForm = AddressRequest;
