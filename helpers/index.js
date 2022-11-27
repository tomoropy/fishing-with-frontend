import cookie from 'cookie'

// cookieの中からtokenを取り出す
export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || '' : '')
}
