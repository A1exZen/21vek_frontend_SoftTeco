import { useState } from 'react';

type UseButtonProps = {
  initialActive?: boolean;
  onClick?: () => void;
};

const useButton = ({ initialActive = false, onClick }: UseButtonProps = {}) => {
  const [isActive, setIsActive] = useState(initialActive);

  const handleClick = () => {
    setIsActive(prev => !prev);
    onClick?.();
  };

  return {
    isActive,
    handleClick,
    setIsActive
  };
};

export default useButton;