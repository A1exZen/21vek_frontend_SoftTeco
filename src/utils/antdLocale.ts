import { useTranslation } from 'react-i18next';

import enUS from 'antd/es/locale/en_US';
import ruRU from 'antd/es/locale/ru_RU';

export const getAntdLocale = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { i18n } = useTranslation();
  const lang = i18n.language;
  switch (lang) {
    case 'ru':
      return ruRU;
    case 'en':
    default:
      return enUS;
  }
};