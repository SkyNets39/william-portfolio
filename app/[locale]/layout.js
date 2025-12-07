import { Box } from "@mui/material";
import StyleProvider from "../_components/StyleProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Navbar from "../_components/Navbar";
import DesktopProfile from "../_components/DesktopProfile";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  return {
    title: "William's Portfolio",
    description: "William's Personal Portfolio",
  };
}

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <AppRouterCacheProvider>
        <StyleProvider>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              minHeight: "100vh",
              bgcolor: "background.default",
            }}
          >
            {/* LEFT SIDEBAR (DESKTOP ONLY) */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                minWidth: "20vw",
                maxWidth: "24vw",
                height: "100vh",
                position: "sticky",
                top: 0,
              }}
            >
              <DesktopProfile />
            </Box>
            {/* MAIN CONTENT / NAVBAR */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <Navbar />
              <Box
                id="main-scroll-container"
                sx={{
                  flexGrow: 1,
                  overflowY: "auto",
                  scrollbarWidth: "none",
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
        </StyleProvider>
      </AppRouterCacheProvider>
    </NextIntlClientProvider>
  );
}
