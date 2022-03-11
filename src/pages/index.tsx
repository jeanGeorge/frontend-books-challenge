import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import cookie from 'cookie';
import { getPaginatedBooks } from '../services/bookServices';
import { PaginatedBooks } from '../types/paginatedBooks';
import { COOKIE_AUTH_TOKEN } from '../constants';

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <div>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const token = cookie.parse(COOKIE_AUTH_TOKEN);
  if (!token || !Object.keys(token).length) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }

  const getPage = (page: string | string[] | undefined): number => {
    if (!page) return 1;
    if (typeof page === 'string') return 1;
    return page.length;
  };

  const amount = 12;
  const { page } = context.query;

  try {
    const books: PaginatedBooks = await getPaginatedBooks(
      getPage(page),
      amount,
    );
    const { totalPages } = books;

    return {
      ...context,
      props: {
        books,
        totalPages,
        metaDescription: 'Take a look at the books!',
        title: 'BookShelf | Home',
      },
    };
  } catch (error) {
    return {
      ...context,
      redirect: {
        destination: '/logout',
        permantent: false,
      },
    };
  }
};

export default Home;
