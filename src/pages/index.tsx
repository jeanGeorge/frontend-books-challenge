import { GetServerSideProps } from 'next';
import { Content, Wrapper } from 'styles/pages/home';
import { getPaginatedBooks } from 'services/bookServices';
import { CardList, HomeHeader, HomeFooter, Modal } from 'components';
import { parseCookies } from 'utils';
import { COOKIE_AUTH_TOKEN } from '../constants';
import { PaginatedBooks } from '../types';

const Home = ({ data, page, totalPages }: PaginatedBooks) => {
  return (
    <Wrapper>
      <Content>
        <HomeHeader />
        <CardList books={data} />
        <HomeFooter page={page} totalPages={totalPages} />
      </Content>
      <Modal />
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const cookies = parseCookies(req);
  const token = cookies[`${COOKIE_AUTH_TOKEN}`];

  if (!token) {
    return {
      redirect: {
        destination: '/login',
      },
      props: {},
    };
  }

  let currentPage = 1;
  let currentAmount = 12;

  if (query.page && !Number.isNaN(query.page)) {
    currentPage = parseInt(`${query.page}`, 10);
  }

  if (query.amount && !Number.isNaN(query.amount)) {
    currentAmount = parseInt(`${query.amount}`, 10);
  }

  try {
    const response = await getPaginatedBooks(currentPage, currentAmount, token);
    const { data, page, totalItems, totalPages } = response.data;
    return {
      props: {
        data,
        page,
        totalItems,
        totalPages,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/logout',
      },
      props: {},
    };
  }
};

export default Home;
