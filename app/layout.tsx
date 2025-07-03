import Header from "@/components/header"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <title>Nepal Center for Philanthropy and Development</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <Header />
          {children}
      </body>
    </html>
  )
}