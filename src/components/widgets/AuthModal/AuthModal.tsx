import { Modal, Input, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { LoginRequest } from '@/models/auth/api';
import Regexs from '@constants/regexes.ts';
import styles from './styles.module.scss';
import Button from '@components/ui/Button';
import FormErrorMessage from '@components/ui/FormErrorMessage/FormErrorMessage.tsx';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

type FormValues = LoginRequest;

interface AuthModalProps {
  isVisible: boolean;
  isLogin: boolean;
  onClose: () => void;
  onToggleMode: () => void;
}

const AuthModal = ({
  isVisible,
  isLogin,
  onClose,
  onToggleMode,
}: AuthModalProps) => {
  const { t: tAuth } = useTranslation('auth');
  // const { isVisible, isLogin, closeAuth, toggleMode } = useAuthModal();
  const { loginMutation, registerMutation } = useAuth();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      mail: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (!isVisible) {
      reset();
    }
  }, [isVisible, reset]);

  const onSubmit: SubmitHandler<LoginRequest> = (data: LoginRequest) => {
    if (isLogin) loginMutation.mutate(data);
    else registerMutation.mutate(data);
    onClose()
  };

  return (
    <Modal
      open={isVisible}
      title={
        <div className={styles['auth-modal__title']}>
          {isLogin ? tAuth('login') : tAuth('register')}
        </div>
      }
      onCancel={onClose}
      footer={null}
      destroyOnClose={true}
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
            name="mail"
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
                status={errors.mail ? 'error' : undefined}
              />
            )}
          />
          {errors.mail && <FormErrorMessage message={errors.mail.message!} />}
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
          {errors.password && (
            <FormErrorMessage message={errors.password.message!} />
          )}
        </div>

        <Space
          direction="vertical"
          align="center"
          className={styles['auth-modal__buttons']}
        >
          <Button type="submit" color="first" variant="solid">
            {isLogin ? tAuth('login') : tAuth('register')}
          </Button>
          <Button type="button" variant="link" onClick={onToggleMode}>
            {isLogin ? tAuth('goToRegister') : tAuth('goToLogin')}
          </Button>
        </Space>
      </form>
    </Modal>
  );
};

export default AuthModal;
