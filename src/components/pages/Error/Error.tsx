import styles from './styles.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles['error-page']}>
      <h2 className={styles['error-page__header']}>
        <span className={styles['error-page__404']}>404</span>
        <span>
          Страница <br />
          не найдена
        </span>
      </h2>
      <p className={styles['error-page__content']}>
        Извините, такой странички у нас нет. Воспользуйтесь навигацией или
        поиском, расположенными вверху, чтобы найти нужный вам товар.
      </p>
    </div>
  );
};

export default ErrorPage;
