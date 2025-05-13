export interface INavItem {
  title: string;
  path: string;
}

export interface IMenuItem {
  title: string;
  path?: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const useHeaderNav = () => {
  const navItems: INavItem[] = [
    { title: 'Оплата частями', path: '/installment' },
    { title: 'Для бизнеса', path: '/business' },
    { title: 'Покупателям', path: '/customers' }
  ];

  const customerItems: IMenuItem[] = [
    { title: 'Доставка и оплата', path: '/delivery' },
    { title: 'Возврат товара', path: '/returns' },
    { title: 'Помощь покупателю', path: '/help' },
    { title: 'Контакты', path: '/contacts' }
  ];

  const phoneItems: IMenuItem[] = [
    { title: '+375 25 502 10 21', href: 'tel:+375255021021' },
    { title: '+375 17 302 10 21', href: 'tel:+375173021021' },
    { title: 'Telegram', href: 'https://t.me/your_telegram' },
    { title: 'Почта', href: 'mailto:info@example.com' },
    { title: 'Заказать звонок', onClick: () => console.log('Заказать звонок') },
    { title: 'Написать нам', href: '/contacts' }
  ];

  return { navItems, customerItems, phoneItems };
};