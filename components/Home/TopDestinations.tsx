import type { NextPage } from 'next';
import Image from 'next/image';
import India from '@public/topdestinations/India.jpg';
import Brazil from '@public/topdestinations/brazil.jpg';
import Italy from '@public/topdestinations/italy.webp';
import Mexico from '@public/topdestinations/mexico.webp';
import Orlando from '@public/topdestinations/orlando-usa.jpg';
import Peru from '@public/topdestinations/peru.jpg'
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const destinations = [
  {
    country: 'India',
    image: India
  },
  {
    country: 'Brazil',
    image: Brazil
  },
  {
    country: 'Italy',
    image: Italy
  },
  {
    country: 'Mexico',
    image: Mexico
  },
  {
    country: 'Orlando, USA',
    image: Orlando
  },
  {
    country: 'Peru',
    image: Peru
  }
]

const TopDestinations: NextPage = () => {
  const topDestinationScroll = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState(0)
  
  useEffect(() => {
    setWindowWidth(topDestinationScroll.current!.offsetWidth)
  }, [])

  const scroll = (scrollOffset:number) => {
    topDestinationScroll.current!.scrollLeft += scrollOffset
  }
  return (
    <div className='mt-20'>
      <div className='flex justify-between max-w-screen-sm'>
        <h2 className='font-bold'>Top Destinations</h2>
        <span 
          className='md:hidden cursor-pointer text-gray-400 text-sm' 
          onClick={() => scroll(windowWidth)}>
            See more
        </span>
        <div className='hidden md:flex'>
          <FontAwesomeIcon 
            icon={faArrowLeft} 
            className='pr-4 text-gray-400 cursor-pointer'
            onClick={() => scroll(-448)}
          />
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className='pr-4 cursor-pointer'
            onClick={() => scroll(448)}
          />
        </div>
      </div>
      <div ref={topDestinationScroll} className='flex flex-nowrap scroll-smooth overflow-x-auto no-scrollbar max-w-screen-sm mt-10'>
        {destinations.map(destination => (
            <div className='pr-2 flex-shrink-0' key={destination.country}>
              <Image 
                className='object-top rounded-lg'
                src={destination.image}
                objectFit='cover'
                width={160}
                height={100}
                alt={destination.country}
              />
              <h3 className='text-sm mt-2'>Hotels in {destination.country}</h3>
              <p className='text-xs text-gray-400'>2000 Hotels - <span className='text-gray-500'>Avg Rs. 1500</span></p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default TopDestinations