import { PATHS } from '@/constants';
import { HttpStatusCode } from '@models/common';
import { notification } from 'antd';

export const handleHttpError = (statusCode?: number): void => {
  switch (statusCode) {
    case HttpStatusCode.UNAUTHORIZED:
      window.location.href = PATHS.LOGIN;
      break;
    case HttpStatusCode.FORBIDDEN:
      notification.error({ message: 'Вы заблокированы' });
      break;
    case HttpStatusCode.NOT_FOUND:
      break;
    case HttpStatusCode.CONFLICT:
      break;
    case HttpStatusCode.INTERNAL_SERVER_ERROR:
      break;
    case HttpStatusCode.SERVICE_UNAVAILABLE:
      break;
    default:
      console.error('Error with Http code', { statusCode });
      break;
  }
};
