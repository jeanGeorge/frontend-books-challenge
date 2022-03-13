import styled from 'styled-components';

const Wrapper = styled.button`
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  height: 160px;
  width: 272px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  margin-bottom: 16px;
  margin-right: 16px;
  padding: 19px 16px 19px 16px;
  display: flex;
  cursor: pointer;
`;

const BookInformationArea = styled.div`
  margin-left: 16px;
`;

const BookTitle = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #333333;
`;

const BookAuthors = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #ab2680;
`;

const BookDescription = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #999999;
`;

export {
  Wrapper,
  BookInformationArea,
  BookTitle,
  BookAuthors,
  BookDescription,
};
