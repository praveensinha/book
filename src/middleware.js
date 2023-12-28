import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/auth')) {
    
  }
  else if (request.nextUrl.pathname.startsWith('/a')) {
    const token = request.cookies.get('token')
    if(!token){
      return NextResponse.redirect(new URL('/auth', request.url))
    }else{
      
    }
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/:path*'],
}