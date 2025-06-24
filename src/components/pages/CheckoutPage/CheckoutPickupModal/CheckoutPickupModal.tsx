import { Modal } from '@components/ui/Modal';
import { setModalOpen } from '@store/slices/basket.slice.ts';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks.ts';

export const CheckoutPickupModal = () => {
  const isModalOpen = useAppSelector((state) => state.basket.isModalOpen);
  const dispatch = useAppDispatch();

  return (
    <Modal
      open={isModalOpen}
      openChangedAction={(open) => dispatch(setModalOpen(open))}
      fullscreen={true}
      noPadding={true}
    >
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A7db8fa03e71266c863adf815271998b429fd3c2f171a15b4ea28f7bd2de153e0&amp;source=constructor"
        width="100%"
        height="100%"
      ></iframe>
    </Modal>
  );
};
