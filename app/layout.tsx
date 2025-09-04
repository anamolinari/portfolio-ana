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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta name="theme-color" content="#f0eae7" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('theme');
                  if (!saved) {
                    saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', saved);
                  var meta = document.querySelector('meta[name="theme-color"]');
                  if (meta) meta.setAttribute('content', saved === 'dark' ? '#2c2826' : '#f0eae7');
                } catch(_) {}
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
