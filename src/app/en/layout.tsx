import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from '@/app/providers';

export default async function Layout({ children }: LayoutProps<'/'>) {
  return (
    <Providers lang={'en'}>
      <div className='min-h-screen flex flex-col overflow-hidden'>
        <Header />

        <main className='pt-16 lg:pt-25 grow'>{children}</main>

        <Footer />
      </div>
    </Providers>
  );
}
