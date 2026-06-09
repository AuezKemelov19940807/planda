import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ru", "kk"],
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
