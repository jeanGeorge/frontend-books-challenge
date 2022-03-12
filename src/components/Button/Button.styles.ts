import styled from 'styled-components';

const Wrapper = styled.div`
  button {
    color: ${({ theme: { colors } }) => colors.pink};
    background: ${({ theme: { colors } }) => colors.white};
    font-weight: ${({ theme: { fonts } }) => fonts.weights.medium};
    z-index: 1;
    border: none;
    width: 85px;
    height: 36px;
    border-radius: 44px;
    cursor: pointer;
    margin-right: 12px;
    margin-top: 14px;
    margin-bottom: 16px;
  }
`;

export { Wrapper };
