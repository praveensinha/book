import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const token = request.cookies.get('token')?.value
  console.log('......>>>>><<<<<<<>>>>>><', token)
  if (request.nextUrl.pathname.startsWith('/auth')) {
    if(token){
      return NextResponse.redirect(new URL('/a', request.url))
    }
  }
  else if (request.nextUrl.pathname.startsWith('/a')) {
    if(!token){
      return NextResponse.redirect(new URL('/auth', request.url))
    }
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/a/:path*', '/b/:path*', '/auth:path*'],
}