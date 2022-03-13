import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

const Header = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;

  padding: 2px 16px;
  color: white;

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

const Content = styled.div`
  position: relative;
  width: 769px;
  margin: auto;
  border: 1px solid #888;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  background: #ffffff;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  padding: 48px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ContentArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: #333333;
`;

const Authors = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ab2680;
`;

const InformationArea = styled.div`
  margin-top: 32px;
`;

const InformationRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReviewArea = styled.div`
  margin-top: 32px;
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  color: #999999;
`;

const TextBold = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 28px;
  color: #333333;
`;

const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    img {
      width: 80%;
      /* height: auto; */
    }
  }

  @media (max-width: 240px) {
    img {
      width: 80%;
      height: auto;
    }
  }
`;

const TextsArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 48px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export {
  Wrapper,
  Content,
  Header,
  Title,
  Authors,
  InformationArea,
  InformationRow,
  ReviewArea,
  Text,
  TextBold,
  ImageArea,
  ContentArea,
  TextsArea,
};
