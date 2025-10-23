import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const _inter = Inter({ subsets: ["latin"] });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kranthi Kumar Julakanti - Senior Software Engineer",
  description:
    "Portfolio of Kranthi Kumar Julakanti - Senior Software Engineer specializing in Next.js, React, and React Native with 8+ years of experience in fintech and mobile app development",
  generator: "v0.app",
  keywords: [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "GraphQL",
    "Frontend Engineer",
    "Senior Frontend Engineer",
    "Fintech",
  ],
  authors: [{ name: "Kranthi Kumar Julakanti" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Kranthi Kumar Julakanti - Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in Next.js, React, and React Native",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
