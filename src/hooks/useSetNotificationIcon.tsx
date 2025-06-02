import { ToastAlertType } from '@/models/common';

import ErrorIcon from '@assets/icons/toast-alert/error.svg';
import SuccessIcon from '@assets/icons/toast-alert/success.svg';
import WarningIcon from '@assets/icons/toast-alert/warning.svg';

export const useNotificationIcon = () => {
  const setNotificationIcon = (iconType?: ToastAlertType): React.ReactNode => {
    const icons = {
      [ToastAlertType.ERROR]: <ErrorIcon />,
      [ToastAlertType.WARNING]: <WarningIcon />,
      [ToastAlertType.SUCCESS]: <SuccessIcon />,
    };

    return iconType ? icons[iconType] : <SuccessIcon />;
  };

  return { setNotificationIcon };
};
