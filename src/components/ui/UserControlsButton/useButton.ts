import { useState } from 'react';

type UseButtonPropsType = {
  initialActive?: boolean;
  onClick?: () => void;
};

const useButton = ({ initialActive = false, onClick }: UseButtonPropsType = {}) => {
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