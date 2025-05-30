import { ToastAlertType } from '@/models/common';

export type ToastProps = {
  type?: ToastAlertType;
  title?: string;
  message?: string;
};
