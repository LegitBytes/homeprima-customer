import type { NextPage } from 'next';
import Image from 'next/image';
import Image1 from '@public/desktopCarousel/1.jpg'
import Image2 from '@public/desktopCarousel/2.jpg'
import Image3 from '@public/desktopCarousel/3.jpg'

const images = [
  Image1, Image2, Image3
]

const HeroImageDesktop: NextPage = () => {
  return (
    <div className='hidden xl:block pt-10 pr-4'>
      <Image
        src={images[Math.floor(Math.random() * images.length)]}
        alt={'Image'}
        objectFit='cover'
        layout='fixed'
        height={600}
        width={500}
        className='rounded-3xl'
      />
    </div>
  );
}

export default HeroImageDesktop