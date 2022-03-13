import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(/images/home-background.png);
  background-size: cover;
  background-position: top;

  @media (min-width: 872px) {
    display: flex;
  }

  @media (min-height: 700px) {
    height: 100vh;
  }
`;

const Content = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export { Wrapper, Content };
