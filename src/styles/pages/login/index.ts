import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(/images/background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  margin: 0 auto;
  width: 368px;
  height: 224px;
`;

export { Wrapper, Form };
