const ErrorPage = () => {
  const status: number = 404;
  const message: string = 'Не найден';
  return (
    <>
      <h1>{status}</h1>
      <p>{message}</p>
    </>
  );
};

export default ErrorPage;
