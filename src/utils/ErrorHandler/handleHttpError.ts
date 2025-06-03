import { PATHS } from '@/constants';
import { HttpStatusCode } from '@models/common';
import { notification } from 'antd';

export const handleHttpError = (statusCode?: number): void => {
  switch (statusCode) {
    case HttpStatusCode.UNAUTHORIZED:
      notification.error({ message: 'Авторизуйтесь снова' });
      break;
    case HttpStatusCode.FORBIDDEN:
      notification.error({ message: 'Вы заблокированы' });
      break;
    case HttpStatusCode.NOT_FOUND:
      window.location.href = PATHS.NOT_FOUND;
      break;
    case HttpStatusCode.INTERNAL_SERVER_ERROR:
      notification.error({ message: 'проверьте соединение с интернетом' });
      break;
    case HttpStatusCode.SERVICE_UNAVAILABLE:
      break;
    default:
      console.error('Error with Http code', { statusCode });
      break;
  }
};
