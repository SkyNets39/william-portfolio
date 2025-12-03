//layout.js
import { Box } from "@mui/material";
import StyleProvider from "./_components/StyleProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Navbar from "./_components/Navbar";
import DesktopProfile from "./_components/DesktopProfile";

export const metadata = {
  title: "My Portfolio",
  description: "William's Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
