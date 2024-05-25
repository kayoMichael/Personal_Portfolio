import { Inter } from 'next/font/google';

import Footer from '../components/footer/footer';

import type { Metadata } from 'next';

import './globals.css';
import NavigationBar from '@/src/components/navbar/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Michael Li',
  description: 'Personal Portfolio of Michael (Heyang) Li',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavigationBar />
        <div className='h-full w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
