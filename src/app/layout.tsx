import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Office Tracker — Simple Work Hour Tracking',
  description:
    'Track your daily work hours with one tap. Office or work-from-home, automatic reminders, weekly summaries. Private and lightweight.',
  metadataBase: new URL('https://office-tracker.vercel.app'),
  openGraph: {
    title: 'Office Tracker',
    description: 'Simple, private work-hour tracking for iOS.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
