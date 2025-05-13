import { useAuthCheck } from '@/hooks/useAuthCheck';

const MainLayout = () => {
  useAuthCheck();
  return <div>Layout</div>;
};

export default MainLayout;
