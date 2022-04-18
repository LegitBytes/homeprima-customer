import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Nav from '@components/Nav';

const Search: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Prima</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </Head>

      <Header />
      <Nav style='mobile-nav' />
      <Footer />
    
    </div>
  );
}

export default Search