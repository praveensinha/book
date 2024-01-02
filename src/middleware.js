import { NextResponse } from 'next/server'

/*
const AUTH_PAGES = ["/login"];
const isAuthPages = (url) => AUTH_PAGES.some((page) => page.startsWith(url));
*/


// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };

  console.log('......>>>>><<<<<<<>>>>>><', token)
  if (request.nextUrl.pathname.startsWith('/auth')) {
    if (token) {
      return NextResponse.redirect(new URL('/a', request.url))
    }
  }
  else if (request.nextUrl.pathname.startsWith('/a')) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth', request.url))
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/a/:path*', '/b/:path*', '/auth:path*'],
}