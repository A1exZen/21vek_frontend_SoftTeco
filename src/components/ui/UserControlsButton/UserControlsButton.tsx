import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

type UserControlsButtonProps = {
  icon: React.ReactNode;
  text: string;
  to?: string;
  className?: string;
  onClickFunc?: () => void;
};

const UserControlsButton = ({ icon, text, to = '/', className = '', onClickFunc }: UserControlsButtonProps) => {
  return (
  <Link
      to={to}
      className={`${styles['user-controls-button']} ${className}`}
      onClick={onClickFunc}
    >
      <span className={styles['button-icon']}>{icon}</span>
      <span className={styles['button-text']}>{text}</span>
    </Link>
  );
};

export default UserControlsButton;