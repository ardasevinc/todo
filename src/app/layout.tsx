import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400'],
});

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
    <html
      lang='en'
      className={`dark ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className='antialiased'>
        <div className='p-4 min-h-dvh'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
