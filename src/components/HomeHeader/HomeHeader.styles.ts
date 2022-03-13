import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 42px;
  margin-bottom: 40px;
  @media only screen and (min-width: 0px) {
    width: 274px;
  }
  @media only screen and (min-width: 590px) {
    width: 564px;
  }
  @media only screen and (min-width: 864px) {
    width: 848px;
  }
  @media only screen and (min-width: 1152px) {
    width: 1136px;
  }
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  span {
    margin-left: 16.6px;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
  }
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (max-width: 590px) {
    span {
      display: none;
    }
  }

  span {
    margin-left: 16.6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 40px;
    span {
      font-weight: 700;
      margin-left: 0px;
      margin-right: 16px;
    }
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export { Wrapper, LogoArea, UserArea };
