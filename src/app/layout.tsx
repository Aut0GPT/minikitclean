import { auth } from '@/auth';
import ClientProviders from '@/providers';
import '@worldcoin/mini-apps-ui-kit-react/styles.css';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clean Mini App Template',
  description: 'A clean starter template for World Mini Apps with wallet authentication and navigation',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ClientProviders session={session}>{children}</ClientProviders>
      </body>
    </html>
  );
}
