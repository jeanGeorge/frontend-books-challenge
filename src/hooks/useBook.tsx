import { BookContext } from 'contexts/BookContext';
import { useContext } from 'react';

export function useBook() {
  const context = useContext(BookContext);
  return context;
}
