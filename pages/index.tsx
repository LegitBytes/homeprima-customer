import type { NextPage } from 'next'
import Head from 'next/head'
import Features from '@components/Home/Features'
import Footer from '@components/Footer'
import Header from '@components/Header'
import HeroImageDesktop from '@components/Home/HeroImageDesktop'
import HotelSearch from '@components/Home/HotelSearch'
import Nav from '@components/Nav'
import NewsLetter from '@components/Home/NewsLetter'
import TopDestinations from '@components/Home/TopDestinations'
import StayDates from '@components/Booking/StayDates'

const Home: NextPage = () => {
  return (
    <div className='pb-14 h-full md:pb-0 bg-slate-100'>
      <Head>
        <title>Home Prima</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </Head>
      <Nav style="mobile-nav"/>
      <main className=' px-4 pb-32 md:px-8 max-w-screen-2xl mx-auto'>
        <Header />
        <div className='flex justify-between'>
          <div className='xl:flex-none'>
            <HotelSearch />
            <TopDestinations />
            {/* <StayDates /> */}
          </div>
          <HeroImageDesktop />
        </div>
        <Features />
      </main>
        <NewsLetter/>
        <Footer />
    
    </div>
  )
}

export default Home
