import Card from 'components/Card/Card';
import { Book } from 'types';
import { Wrapper } from './CardList.styles';

interface CardListProps {
  books: Array<Book>;
}

const CardList = ({ books }: CardListProps) => {
  return (
    <Wrapper>
      {books?.map(book => (
        <Card key={JSON.stringify(book)} book={book} />
      ))}
    </Wrapper>
  );
};

export default CardList;
