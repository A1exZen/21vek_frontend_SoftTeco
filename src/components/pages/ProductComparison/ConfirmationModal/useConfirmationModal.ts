import { useState } from 'react';

export const useConfirmationModal = <T,>() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<T | null>(null);

  const openModal = (item: T | null) => {
    {/*To cover the background*/}
    document.body.classList.add('modal-open');
    setItemToDelete(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove('modal-open');
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  return {
    isModalOpen,
    itemToDelete,
    openModal,
    closeModal
  };
};