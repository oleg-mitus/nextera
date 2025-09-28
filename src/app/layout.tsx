import localFont from 'next/font/local';
import '@/app/globals.css';

const axiforma = localFont({
  variable: '--font-alice-sans',
  src: [
    {
      path: '../../public/fonts/axiforma/Axiforma-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
});

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html>
      <body className={`${axiforma.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
