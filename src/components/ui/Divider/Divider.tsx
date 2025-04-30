import { Divider as AntDivider } from 'antd';
import styles from './styles.module.scss';

type DividerProps = {
  type?: 'vertical' | 'horizontal';
  className?: string;
};

const Divider = ({ type = 'horizontal', className = '' }: DividerProps) => {
  return (
    <AntDivider 
      type={type}
      className={`${styles[`divider`]} ${styles[`divider-${type}`]} ${className}`}
    />
  );
};

export default Divider;