export interface INavItem {
  title: string;
  path: string;
}

export const useHeaderNav = () => {
  const INavItems: INavItem[] = [
    { title: 'Оплата частями', path: '/installment' },
    { title: 'Для бизнеса', path: '/business' },
    { title: 'Покупателям', path: '/customers' }
  ];

  return { INavItems };
};