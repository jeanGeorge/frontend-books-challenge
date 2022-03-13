/* eslint-disable react/button-has-type */
import { ReactNode } from 'react';
import { Wrapper } from './Button.styles';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, type, disabled, onClick }: ButtonProps) => {
  return (
    <Wrapper>
      <button type={type} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </Wrapper>
  );
};

Button.defaultProps = {
  onClick: () => null,
  disabled: false,
};

export default Button;
