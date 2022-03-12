import { useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Wrapper } from './Input.styles';

interface InputProps {
  id: string;
  label: string;
  type: 'text' | 'password';
  register: UseFormRegisterReturn;
}

const Input = ({ id, label, type, register }: InputProps) => {
  const [className, setClassName] = useState('');
  const [newRegister, setNewRegister] = useState(register);

  const onFocus = () => {
    setClassName('active');
  };

  useEffect(() => {
    setNewRegister({
      ...register,
      onBlur: (event: { target: any; type?: any }) => {
        if (event.target.value) {
          setClassName('active');
        } else {
          setClassName('');
        }
        return register.onBlur(event);
      },
    });
  }, []);

  return (
    <Wrapper className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        onFocus={onFocus}
        {...newRegister}
        autoComplete="chrome-off"
      />
    </Wrapper>
  );
};

export default Input;
