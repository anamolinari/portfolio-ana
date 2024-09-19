import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { ThemeProvider } from "./context/ThemeContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ana Molinari",
  description: "Frontend developer based in Madrid, Spain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-background font-medium transition-colors duration-300 ease`}
      >
        <ThemeProvider>
          <Header />
          <main className="sm:w-[584px] sm:m-auto flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
