import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "./Component/Header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GetAid",
  description: "GetAid: Your Gateway to Convenient and Reliable Medical Assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Header /> */}
      <div>{children}</div>
      </body>
    </html>
  );
}
