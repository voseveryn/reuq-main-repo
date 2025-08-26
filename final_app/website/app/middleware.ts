import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const locales = ['cs', 'en']

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

	if (pathnameHasLocale) return
	// Redirect / to /cs
	request.nextUrl.pathname = `/${'cs'}${pathname}`

	return NextResponse.redirect(request.nextUrl)
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)'],
}