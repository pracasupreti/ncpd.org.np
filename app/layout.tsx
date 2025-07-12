import Header from "@/components/header";
import "./globals.css";
import { Sen } from 'next/font/google'
import Footer from "@/components/footer";

const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sen',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sen.variable}>
      <head>
        <link rel="icon" href="/logo.png" />
        <title>Nepal Center for Philanthropy and Development</title>
      </head>
      <body className={`${sen.className} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}