export interface NavItem {
  title: string;
  path: string;
}

export const useHeaderNav = () => {
  const navItems: NavItem[] = [
    { title: 'Оплата частями', path: '/installment' },
    { title: 'Для бизнеса', path: '/business' },
    { title: 'Покупателям', path: '/customers' }
  ];

  return { navItems };
};