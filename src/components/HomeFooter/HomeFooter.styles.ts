import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 16px;
  margin-bottom: 40px;

  button {
    margin-left: 16px;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  @media only screen and (min-width: 0px) {
    width: 274px;
  }
  @media only screen and (min-width: 576px) {
    width: 564px;
  }
  @media only screen and (min-width: 864px) {
    width: 848px;
  }
  @media only screen and (min-width: 1152px) {
    width: 1136px;
  }
`;

export { Wrapper };
