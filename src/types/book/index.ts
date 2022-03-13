type Book = {
  id: string;
  title: string;
  description: string;
  authors: Array<string>;
  pageCount: string;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
};

function getAuthors(book?: Book) {
  return book?.authors.join(', ');
}

export { getAuthors };
export type { Book };
