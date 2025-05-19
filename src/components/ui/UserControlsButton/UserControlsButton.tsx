import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { cc } from "@/utils/combineClasses";

type UserControlsButtonProps = {
  icon: React.ReactNode;
  text: string;
  to: string;
  className?: string;
};

const UserControlsButton = ({ icon, text, to, className = '' }: UserControlsButtonProps) => {
  return ( 
  <Link 
      to={to} 
      className={cc(styles['user-controls-button'], className)}
    >
      <span className={styles['button-icon']}>{icon}</span>
      <span className={styles['button-text']}>{text}</span>
    </Link>
  );
};

export default UserControlsButton;
