import styles from './styles.module.scss';

type FormErrorMessageProps = {
  message: string;
};

const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
  return <div className={styles['error']}>{message}</div>;
};

export default FormErrorMessage;