import styled from 'styled-components';

const Wrapper = styled.div`
  input {
    width: 100%;
    height: 60px;
    background: rgba(0, 0, 0, 0.32);
    border: 0;
    backdrop-filter: blur(2px);
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  input:focus {
    outline: none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }
`;

export { Wrapper };
