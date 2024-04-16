import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'TODO',
  description: 'TODO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`dark ${inter.variable}`}>
      <body className='antialiased'>
        <div className='p-4 min-h-dvh'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
