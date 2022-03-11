import { Book } from '../book';

export type PaginatedBooks = {
  data: Array<Book>;
  page: number;
  totalPages: number;
  totalItems: number;
};
