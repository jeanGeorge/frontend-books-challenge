import { createContext, FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Book } from 'types';
import { getPageNumber } from 'utils';

interface IBookContext {
  book?: Book;
  isModalOpened: boolean;
  openBookModal: (newBook: Book) => void;
  closeModal: () => void;
  nextPage: (currentPage: number) => void;
  previousPage: (currentPage: number) => void;
}

export const BookContext = createContext<IBookContext>({} as IBookContext);

const BookProvider: FC = ({ children }) => {
  const { push, query, pathname } = useRouter();
  const [book, setBook] = useState<Book>();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [page, setPage] = useState<number>(getPageNumber(query.page));

  useEffect(() => {
    if (pathname !== '/') return;
    let newUrl = `?page=${page}`;
    const { amount } = query;
    if (amount) {
      newUrl += `&amount=${amount}`;
    }
    push(newUrl);
  }, [page]);

  function openBookModal(newBook: Book) {
    setBook(newBook);
    setIsModalOpened(true);
  }

  function closeModal() {
    setBook(undefined);
    setIsModalOpened(false);
  }

  function nextPage(currentPage: number) {
    setPage(currentPage + 1);
  }

  function previousPage(currentPage: number) {
    setPage(currentPage - 1);
  }

  return (
    <BookContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        book,
        isModalOpened,
        openBookModal,
        closeModal,
        nextPage,
        previousPage,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
