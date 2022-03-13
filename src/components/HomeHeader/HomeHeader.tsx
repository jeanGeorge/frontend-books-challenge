import Logo from 'components/Logo/Logo';
import { useAuth } from 'hooks/useAuth';
import { LogoArea, UserArea, Wrapper } from './HomeHeader.styles';

const HomeHeader = () => {
  const { user, logout } = useAuth();

  const handleClick = () => {
    logout();
  };

  return (
    <Wrapper>
      <LogoArea>
        <Logo fill="#333333" />
      </LogoArea>
      <UserArea>
        <span>
          Bem vindo, <span>{user?.name}</span>
        </span>
        <button type="button" onClick={handleClick}>
          <img src="/images/logout-logo.png" alt="Sair" />
        </button>
      </UserArea>
    </Wrapper>
  );
};

export default HomeHeader;
