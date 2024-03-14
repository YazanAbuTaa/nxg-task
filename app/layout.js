import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import MainHeader from "./components/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NXG Task",
  description: "Created by Yazan Abu Ta'a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MainHeader/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
