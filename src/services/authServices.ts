import baseApi from './baseApi';

const api = baseApi;

async function signIn(email: string, password: string) {
  return api
    .post('/auth/sign-in', {
      email,
      password,
    })
    .then(response => response)
    .catch(err => {
      throw err;
    });
}

function refreshToken() {
  return api
    .post('/auth/refresh-token')
    .then(response => response.headers)
    .catch(err => {
      throw err;
    });
}
export { signIn, refreshToken };
