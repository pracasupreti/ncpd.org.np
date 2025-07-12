import Header from "@/components/header";
import "./globals.css";
import { Sen } from 'next/font/google'
import Footer from "@/components/footer";
const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sen',
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sen.className}>
      <head>
         <link
          href="https://fonts.googleapis.com/css2?family=TikTok+Sans:opsz,wght@12..36,300..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
        <title>Nepal Center for Philanthropy and Development</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
