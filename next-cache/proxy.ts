import { NextRequest, NextResponse } from "next/server"

export const proxy = (request: NextRequest) => {
    const pathname = request.nextUrl.pathname
    console.log("proxy", pathname)
    return NextResponse.next()
}

export const config = {
    matcher:
        '/((?!api|_next/data|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}

// Proxy will still run for /_next/data/* routes despite being excluded