import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';
import NavigationBar from '@/components/navbar/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <div className='h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative'>
          {children}
        </div>
      </body>
    </html>
  );
}
