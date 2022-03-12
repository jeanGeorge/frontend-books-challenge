import { Wrapper } from './Button.styles';

interface ButtonProps {
  children: string;
  type: 'button' | 'submit';
  onClick?: () => void;
}

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <Wrapper>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </Wrapper>
  );
};

Button.defaultProps = {
  onClick: () => null,
};

export default Button;
