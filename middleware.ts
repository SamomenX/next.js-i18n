
import { NextResponse } from "next/server";

const BASE_URL = "http://localhost:3000";
let locales = ["en", "de"];

function isMissingLocale(pathname: string) {
    return locales.every((locale) => !pathname.startsWith(`/${locale}`)) && !locales.some((locale) => pathname === `/${locale}`);
}
  
export function middleware(req: { nextUrl: { pathname: any; }; }) {
    const pathname = req.nextUrl.pathname;
    const pathnameIsMissingLocale = isMissingLocale(pathname);

    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(
            new URL(
                `/en/${pathname}`,
                BASE_URL
            ).toString()
        );
        /*
        const locale = en;
        const nextUrl = `/${locale}${pathname}`;
        NextResponse.redirect(nextUrl);
        */
    }
}