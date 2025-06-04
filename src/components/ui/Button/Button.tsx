import { ReactNode } from 'react';
import { cc } from '@utils/combineClasses';
import styles from './styles.module.scss';
import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'link' | 'bordered';
  color?: 'first' | 'second' | 'third';
  className?: string;
  maxWidth?: boolean;
  width?: string | number;
  icon?: ReactNode;
  to?: string;
  children?: string | ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    className,
    variant = 'solid',
    color,
    maxWidth,
    width,
    type = 'button',
    icon,
    to,
    children,
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
      {...restProps}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
