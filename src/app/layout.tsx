import "../style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToastContainer from "@/components/ToastContainer";

export const metadata: Metadata = {
  title: {
    default: "Livros",
    template: "%s | dev.lspenha.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
