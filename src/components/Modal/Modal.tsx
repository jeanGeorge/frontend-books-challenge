import { useBook } from 'hooks/useBook';
import { getAuthors } from 'types/book';
import {
  Authors,
  Content,
  Header,
  InformationArea,
  InformationRow,
  ReviewArea,
  Title,
  Wrapper,
  Text,
  TextBold,
  ImageArea,
  ContentArea,
  TextsArea,
} from './Modal.styles';

const Modal = () => {
  const { isModalOpened, closeModal, book } = useBook();

  const handleClose = () => {
    closeModal();
  };

  return isModalOpened ? (
    <Wrapper>
      <Header>
        <button type="button" onClick={handleClose}>
          <img src="/images/close.png" alt="Sair" />
        </button>
      </Header>
      <Content>
        <ContentArea>
          <ImageArea>
            <img src={book?.imageUrl} alt={book?.title} />
          </ImageArea>
          <TextsArea>
            <Title>{book?.title}</Title>
            <Authors>{getAuthors(book)}</Authors>
            <InformationArea>
              <InformationRow>
                <TextBold>INFORMAÇÕES</TextBold>
              </InformationRow>
              <InformationRow>
                <TextBold>Páginas</TextBold>
                <Text>{book?.pageCount}</Text>
              </InformationRow>
              <InformationRow>
                <TextBold>Editora</TextBold>
                <Text>{book?.publisher}</Text>
              </InformationRow>
              <InformationRow>
                <TextBold>Publicação</TextBold>
                <Text>{book?.published}</Text>
              </InformationRow>
              <InformationRow>
                <TextBold>Idioma</TextBold>
                <Text>{book?.language}</Text>
              </InformationRow>
              <InformationRow>
                <TextBold>Título Original</TextBold>
                <Text>{book?.title}</Text>
              </InformationRow>
              <InformationRow>
                <TextBold>ISBN-10</TextBold>
                <Text>{book?.isbn10}</Text>
              </InformationRow>
              <InformationRow>
                <TextBold>ISBN-13</TextBold>
                <Text>{book?.isbn13}</Text>
              </InformationRow>
            </InformationArea>
            <ReviewArea>
              <InformationRow>
                <TextBold>RESENHA DA EDITORA</TextBold>
              </InformationRow>
              <img src="/images/quotes.png" alt="Aspas" />
              <Text>{book?.description}</Text>
            </ReviewArea>
          </TextsArea>
        </ContentArea>
      </Content>
    </Wrapper>
  ) : null;
};

export default Modal;
