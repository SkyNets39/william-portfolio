import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  locales: ["en", "zh"],
  defaultLocale: "en",
});

export default function proxy(request) {
  console.log("🔷 PROXY - Request URL:", request.url);
  console.log("🔷 PROXY - Pathname:", request.nextUrl.pathname);

  const response = middleware(request);

  console.log("🔷 PROXY - Response status:", response.status);

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)", "/", "/(en|zh)/:path*"],
};
