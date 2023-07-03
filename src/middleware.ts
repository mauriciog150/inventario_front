import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const token = request.cookies.get("token")?.value;
    console.log("En el middleware: "+token)
    if (!token){
        console.log("redireccion")
        return NextResponse.rewrite(new URL('/login', request.url))
    }
    console.log("Ok")
    
}


export const config = {
    matcher: [

      '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
    ],
  }