import localFont from 'next/font/local';
import '@/app/globals.css';

const axiforma = localFont({
  variable: '--font-axiforma-sans',
  src: [
    {
      path: '../../public/fonts/axiforma/Axiforma-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-LightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-BookItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-SemiBoldItalic.ttf',
      weight: '600',
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
