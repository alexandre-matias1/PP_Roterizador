import { Poppins } from 'next/font/google';
import { RoutesProvider } from "./context/data-context";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`antialiased`} suppressHydrationWarning>
        <RoutesProvider>{children}</RoutesProvider>
      </body>
    </html>
  );
}
