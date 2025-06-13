import { useState } from 'react';

export const useConfirmationModal = <T,>() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<T | null>(null);

  const openModal = (item: T | null) => {
    setItemToDelete(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
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