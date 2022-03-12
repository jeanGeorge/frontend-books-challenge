import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(/images/background.png);
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 598px) {
    flex-direction: row;
  }
`;

const Form = styled.div`
  width: 368px;
  height: 100vh;
  margin-left: 115px;
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 598px) {
    width: 82.22%;
    margin-left: 0px;
  }
`;

const FormRow = styled.div`
  background: ${({ theme: { colors } }) => colors.almostTransparent};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

const FormHeader = styled.div`
  width: 198px;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 50px;

  a {
    height: 36px;
  }

  span {
    font-size: ${({ theme: { fonts } }) => fonts.sizes.large};
    color: ${({ theme: { colors } }) => colors.white};
    margin-left: 16.6px;
  }
`;

export { Wrapper, Form, FormHeader, FormRow };
