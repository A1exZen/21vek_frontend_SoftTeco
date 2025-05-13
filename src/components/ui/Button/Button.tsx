import { ReactNode } from 'react';
import { cc } from '@utils/combineClasses';
import styles from './styles.module.scss';
import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'link'
  color?: 'first' | 'second';
  className?: string;
  maxWidth?: boolean;
  width?: string | number;
  children: string | ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    className,
    variant = 'solid',
    color,
    maxWidth,
    width,
    type = 'button',
    children,
    ...restProps
  } = props;

  return (
    <button
      type={type}
      style={{ width }}
      className={cc(
        styles[`button_variant_${variant}`],
        styles[`button_color_${color}`],
        maxWidth && styles.maxWidth,
        className,
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
