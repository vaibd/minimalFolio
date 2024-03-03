import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Vaibhav Dalakoti',
  description: 'Personal website of Vaibhav Dalakoti',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.className} dark:bg-neutral-950 relative`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Header />
          <main className='wrapper flex-center flex-col content-z-index'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
