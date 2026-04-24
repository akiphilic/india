// Basic Authentication Middleware for Vercel Edge
export const config = {
  matcher: '/:path*',
}

export default function middleware(request) {
  const basicAuth = request.headers.get('authorization')
  const url = request.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    // Get credentials from environment variables
    const validUser = process.env.BASIC_AUTH_USER || 'jhamtse'
    const validPassword = process.env.BASIC_AUTH_PASSWORD || 'compassion2024'

    if (user === validUser && pwd === validPassword) {
      return
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}
