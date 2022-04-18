import { faArrowRight, faHotel, faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import { ChangeEvent } from 'react';
import useComponentVisible from '@hooks/OutsideClickAlerter';

const searchResults = [
  {
    icon: faLocationDot,
    title: 'Chandigarh, India'
  },
  {
    icon: faLocationDot,
    title: 'New Delhi, India'
  },
  {
    icon: faLocationDot,
    title: 'New York, USA'
  },
  {
    icon: faHotel,
    title: 'Novotel, Chandigarh, India'
  },
  {
    icon: faHotel,
    title: 'Novotel, Ahemdabad, India'
  },
  {
    icon: faHotel,
    title: 'Lemon Tree, Chandigarh, India'
  },
  {
    icon: faHotel,
    title: 'Novotel1, Chandigarh, India'
  },
  {
    icon: faHotel,
    title: 'Novotel1, Ahemdabad, India'
  },
  {
    icon: faHotel,
    title: 'Lemon Tree1, Chandigarh, India, Lemon Tree, Chandigarh, India'
  }
]

const HotelSearch: NextPage = () => {
  const {ref, isComponentVisible: isSearchResultVisible, setIsComponentVisible: setSearchResultVisible} = useComponentVisible(false)

  const openSearchResults = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.value.length === 0) {
      setSearchResultVisible(false)
    }
    else {
      setSearchResultVisible(true)
    }
  }

  return (
    <div className='py-4 mt-20 md:mt-32 relative w-full'>
      <h1 className='font-medium text-5xl'>
        <span className='text-blue-500'>Book</span> a Room
      </h1>
      <div className='flex mt-10 shadow-xl shadow-blue-100 max-w-screen-sm bg-white rounded-full p-1 md:p-2'>
        <FontAwesomeIcon icon={faSearch} className='p-4 text-gray-400 md:p-6' />
        <input type="text" placeholder='Destination or hotel name' className='outline-none p-2 flex-grow bg-transparent' onChange={(event) => openSearchResults(event)} />
        <button className='py-2 px-4 text-sm bg-blue-500 text-white rounded-full md:hidden'>
           <FontAwesomeIcon icon={faArrowRight} size={'lg'} />
        </button>
        <button className='py-3 px-8 font-light text-md bg-blue-500 text-white rounded-full hidden md:inline-flex md:py-5 md:px-10'>
           {"Let's Go"}<FontAwesomeIcon className='pl-3 pt-0.5' icon={faArrowRight} size={'lg'} />
        </button>
      </div>
      <p className='pt-6 text-sm cursor-pointer'><span className='text-gray-300'>or</span> looking for a hotel nearby tonight?</p>
      <div ref={ref} className={`bg-white top-44 md:top-[12.5rem] w-full rounded-3xl shadow-lg absolute flex flex-col z-10 max-h-64 ease-in-out transform-gpu transition-[translate, visibility, opacity] duration-100 overflow-y-auto no-scrollbar ${isSearchResultVisible ? 'visible opacity-100 -translate-y-2 ': 'invisible opacity-0 translate-y-0 '}`}>
        {searchResults.map(result => (
          <div className='flex px-5 group hover:bg-slate-200 cursor-pointer' onClick={() => {}} key={result.title}>
            <FontAwesomeIcon 
              icon={result.icon}
              className='p-4'
            />
            <div className='py-3 flex-grow text-ellipsis overflow-hidden whitespace-nowrap'>{result.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelSearch