import cookie from 'cookie';
import { IncomingMessage } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

function parseCookies(
  req: IncomingMessage & { cookies: NextApiRequestCookies },
) {
  if (req?.headers?.cookie) {
    return cookie.parse(req.headers.cookie);
  }
  return null;
}

function getPageNumber(page: string | string[] | undefined) {
  if (page && !Number.isNaN(page) && typeof page === 'string') {
    return parseInt(page, 10);
  }
  return 1;
}

export { parseCookies, getPageNumber };
