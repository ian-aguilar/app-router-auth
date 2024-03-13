import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { verifyClientSession, verifyServerSession } from '@/lib/session';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This is for quick testing, we shouldn't verify the session in a layout
  const x = await verifyClientSession();
  const y = await verifyServerSession();
  console.log(x);
  console.log(y);

  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
