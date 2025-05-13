import { useState } from 'react';
import { Modal, Input, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import Regexs from '@constants/regexes.ts';
import styles from './styles.module.scss';
import Button from '@components/ui/Button'
import FormErrorMessage
  from '@components/ui/FormErrorMessage/FormErrorMessage.tsx';

type AuthModalProps = {
  visible: boolean;
  onClose: () => void;
};

type FormValues = {
  email: string;
  password: string;
};

const AuthModal = ({ visible, onClose }: AuthModalProps) => {
  const { t: tAuth } = useTranslation('auth');
  const [isLogin, setIsLogin] = useState(true);

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = (values: FormValues) => {
    console.log(isLogin ? 'Login' : 'Register', values);
    reset();
    onClose();
  };

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    reset();
  };

  return (
    <Modal
      open={visible}
      title={
        <div className={styles['auth-modal__title']}>
          {isLogin ? tAuth('login') : tAuth('register')}
        </div>
      }
      onCancel={onClose}
      footer={null}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles['auth-modal__form']}
      >
        <div className={styles['auth-modal__field']}>
          <label className={styles['auth-modal__field-label']}>
            {tAuth('email')}
          </label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: tAuth('emailRequired'),
              pattern: {
                value: Regexs.EMAIL,
                message: tAuth('emailInvalid'),
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={tAuth('emailPlaceholder')}
                status={errors.email ? 'error' : undefined}
              />
            )}
          />
          {errors.email && <FormErrorMessage message={errors.email.message!} />}
        </div>

        <div className={styles['auth-modal__field']}>
          <label className={styles['auth-modal__field-label']}>
            {tAuth('password')}
          </label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: tAuth('passwordRequired'),
              pattern: {
                value: Regexs.PASSWORD,
                message: tAuth('passwordInvalid'),
              },
            }}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder={tAuth('passwordPlaceholder')}
                status={errors.password ? 'error' : undefined}
              />
            )}
          />
          {errors.password && <FormErrorMessage message={errors.password.message!} />}
        </div>

        <Space direction="vertical" align='center' className={styles['auth-modal__buttons']}>
          <Button
            type="submit"
            color="first"
            variant="solid"
          >
            {isLogin ? tAuth('login') : tAuth('register')}
          </Button>
          <Button
            type="button"
            variant="link"
            onClick={toggleMode}
          >
            {isLogin ? tAuth('goToRegister') : tAuth('goToLogin')}
          </Button>
        </Space>
      </form>
    </Modal>
  );
};

export default AuthModal;
