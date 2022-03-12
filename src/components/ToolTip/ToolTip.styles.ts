import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 239px;
  height: 64px;
`;

const TextArea = styled.div`
  background: ${({ theme: { colors } }) => colors.gray};
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  background: ${({ theme: { fonts } }) => fonts.weights.bold};
  font-size: ${({ theme: { fonts } }) => fonts.sizes.normal};
  color: ${({ theme: { colors } }) => colors.white};
  line-height: 16px;
`;

const Triangle = styled.div`
  margin-left: 16px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-top: 0;
  border-bottom: 8px solid rgba(255, 255, 255, 0.4);
`;

export { TextArea, Text, Triangle, Wrapper };
