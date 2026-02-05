import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import type { NextRequest } from 'next/server';

const intlMiddleware = createIntlMiddleware(routing);

export function proxy(request: NextRequest) {
    return intlMiddleware(request);
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|fr|es)/:path*']
};
