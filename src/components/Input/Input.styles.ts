import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  input {
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme: { colors } }) => colors.transparent};
    font-weight: ${({ theme: { fonts } }) => fonts.weights.regular};
    font-size: ${({ theme: { fonts } }) => fonts.sizes.normal};
    width: 85%;
    height: 60px;
    border: 0;
    backdrop-filter: blur(2px);
    border-radius: 4px;
    line-height: 24px;
    padding-left: 16px;
    padding-top: 6px;
  }

  input:focus {
    outline: none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme: { colors } }) => colors.white};
    -webkit-text-stroke-color: ${({ theme: { colors } }) => colors.white};
  }

  label {
    color: ${({ theme: { colors } }) => colors.white};
    font-size: ${({ theme: { fonts } }) => fonts.sizes.normal};
    opacity: 0.5;
    z-index: 1;
    margin-left: 16px;
    position: absolute;
    transform-origin: top left;
    transform: translate(0, 16px) scale(1);
    transition: all 0.1s ease-in-out;
  }

  &.active {
    label {
      transform: translate(0, 4px) scale(0.75);
      margin-top: 4px;
    }
  }
`;

export { Wrapper };
