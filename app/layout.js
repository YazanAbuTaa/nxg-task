
'use client';
import "./globals.css";
import Providers from "./components/Providers";
import MainHeader from "./components/MainHeader";
import { ThemeProvider,CssBaseline } from "@mui/material";
import theme from "./theme/theme";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <body >
          <Providers>
            <MainHeader />
            {children}
          </Providers>
        </body>
      </ThemeProvider>

    </html>
  );
}
