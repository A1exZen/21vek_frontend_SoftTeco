import { useTranslation } from 'react-i18next';
import { Select } from 'antd';

const { Option } = Select;

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation('common');

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      defaultValue={i18n.language}
      style={{ width: 100}}
      onChange={handleLanguageChange}
      aria-label={t('switchLanguage')}
    >
      <Option value="en">English</Option>
      <Option value="ru">Русский</Option>
    </Select>
  );
};

export default LanguageSwitcher;