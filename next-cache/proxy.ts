import { NextRequest, NextResponse } from "next/server"

export const proxy = (request: NextRequest) => {
    const pathname = request.nextUrl.pathname
    if (pathname.startsWith("/blog")) {
        return NextResponse.redirect(new URL("/posts", request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher:
        '/((?!api|_next/data|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}

// export const config = {
//     matcher: ["/old-blog/:path*"],
// }

// Proxy will still run for /_next/data/* routes despite being excluded