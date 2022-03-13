import { AxiosError } from 'axios';
import baseApi from './baseApi';
import { Category } from '../types';

const api = baseApi;

async function getPaginatedBooks(
  page: number,
  amount: number,
  token: string,
  title?: string,
  category?: Category,
) {
  return api
    .get(
      `/books?page=${page}&amount=${amount}&title=${title ?? ''}&category=${
        category ?? ''
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then(response => response)
    .catch((error: AxiosError) => {
      throw error;
    });
}

function getDetailedBook(id: number) {
  return api
    .get(`/books/${id}`)
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
}
export { getPaginatedBooks, getDetailedBook };
