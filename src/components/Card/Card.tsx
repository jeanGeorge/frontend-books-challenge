import { useBook } from 'hooks/useBook';
import { Book } from 'types';
import { getAuthors } from 'types/book';
import {
  BookAuthors,
  BookDescription,
  BookInformationArea,
  BookTitle,
  Wrapper,
} from './Card.styles';

interface CardProps {
  book: Book;
}

const Card = ({ book }: CardProps) => {
  const { openBookModal } = useBook();

  const handleClick = () => {
    openBookModal(book);
  };

  return (
    <Wrapper onClick={handleClick}>
      <img alt={book.title} src={book.imageUrl} width="81" />
      <BookInformationArea>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthors>{getAuthors(book)}</BookAuthors>
        <BookDescription>
          <div>{book.pageCount} páginas</div>
          <div>{book.publisher}</div>
          <div>Publicado em {book.published}</div>
        </BookDescription>
      </BookInformationArea>
    </Wrapper>
  );
};

export default Card;
