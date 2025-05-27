import { INavItem, IMenuItem } from "./types";
import { PATHS } from '@/constants/path.config';

interface IHeaderNavConfig {
  navItems: INavItem[];
  customerItems: IMenuItem[];
  phoneItems: IMenuItem[];
}

export const HEADER_NAV: IHeaderNavConfig = {
  navItems: [
    { title: 'Оплата частями', path: PATHS.INSTALLMENT },
    { title: 'Для бизнеса', path: PATHS.BUSINESS },
    { title: 'Покупателям', path: PATHS.CUSTOMERS }
  ],
  customerItems: [
    { title: 'Доставка и оплата', path: PATHS.DELIVERY },
    { title: 'Возврат товара', path: PATHS.RETURNS },
    { title: 'Помощь покупателю', path: PATHS.HELP },
    { title: 'Контакты', path: PATHS.CONTACTS }
  ],
  phoneItems: [
    { title: '+375 25 502 10 21', href: 'tel:+375255021021' },
    { title: '+375 17 302 10 21', href: 'tel:+375173021021' },
    { title: 'Telegram', href: 'https://t.me/somebody' },
    { title: 'Почта', href: 'mailto:info@example.com' },
    { 
      title: 'Заказать звонок', 
      onClick: () => console.log('Заказать звонок') 
    },
    { title: 'Написать нам', href: '/contacts' }
  ]
};