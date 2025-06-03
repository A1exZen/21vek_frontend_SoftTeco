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