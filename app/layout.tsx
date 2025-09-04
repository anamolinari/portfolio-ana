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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (!t) {
                    t = window.matchMedia('(prefers-color-scheme: dark)').matches
                      ? 'dark'
                      : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', t);
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
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
