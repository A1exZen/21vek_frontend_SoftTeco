import { ReactNode } from 'react';
import { cc } from '@utils/combineClasses';
import styles from './styles.module.scss';
import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'link' | 'bordered' | 'rounded';
  color?: 'first' | 'second' | 'third';
  className?: string;
  maxWidth?: string;
  width?: string | number;
  icon?: ReactNode;
  to?: string;
  children?: string | ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  const {
    className,
    variant = 'solid',
    color = 'first',
    maxWidth,
    width,
    type = 'button',
    icon,
    to,
    children,
    onClick,
    ...restProps
  } = props;

  return (
    <button
      type={type}
      style={{ width }}
      data-to={to}
      className={cc(
        styles[`button_variant_${variant}`],
        styles[`button_color_${color}`],
        maxWidth && styles.maxWidth,
        className,
      )}
      onClick={onClick}
      {...restProps}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
