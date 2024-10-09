import { Inter } from "next/font/google";
import Header from "../Component/Header/page";
import Footer from "../Component/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
