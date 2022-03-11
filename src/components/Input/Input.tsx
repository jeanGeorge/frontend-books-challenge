import { Wrapper } from './Input.styles';

interface InputProps {
  id: string;
  label: string;
  type: 'text' | 'password';
  placeholder: string;
}

const Input = ({ id, label, type, placeholder }: InputProps) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </Wrapper>
  );
};

export default Input;
