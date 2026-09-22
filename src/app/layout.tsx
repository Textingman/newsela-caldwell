import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Caldwell School District 132",
  description: "Caldwell School District 132",
  openGraph: {
    title: "Caldwell School District 132",
    description: "Caldwell School District 132",
  },
  twitter: {
    title: "Caldwell School District 132",
    description: "Caldwell School District 132",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
