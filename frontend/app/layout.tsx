import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainNav from '@/components/mainNav';
import MainFooter from '@/components/mainFooter';
import { Toaster } from 'sonner';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InatorsUI | Shadcn-ui based components for nextjs developers',
  description:
    'inatorsui is a collection of nextjs components and templates based on Tailwind and Shadcn/ui for nextjs, just copy and use',
  keywords: [
    'Tailwind',
    'Shadcn/ui',
    'Components',
    'Inators UI',
    'Inatorsui',
    'Inators',
    'inatorsui',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="wuKkVFD1dhs31EjQNk81yBbw-temshhMPPc8JGAUC94"
      />
      <meta
        name="google-adsense-account"
        content="ca-pub-9924264215171914"
      />
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9924264215171914"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={inter.className}>
        <div className="">
          <MainNav />
        </div>

        <div className="min-h-screen mt-16">{children}</div>

        <div>
          <MainFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
