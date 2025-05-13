import { Divider as AntDivider } from 'antd';
import styles from './styles.module.scss';

type DividerPropsType = {
  type?: 'vertical' | 'horizontal';
  className?: string;
};

const Divider = ({ type = 'horizontal', className = '' }: DividerPropsType) => {
  return (
    <AntDivider 
      type={type}
      className={`${styles[`divider`]} ${styles[`divider-${type}`]} ${className}`}
    />
  );
};

export default Divider;