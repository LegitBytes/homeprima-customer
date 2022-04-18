import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <div className='bg-blue-900 py-16'>
      <div className='flex flex-wrap justify-evenly text-white'>
        <div className='w-screen px-5 md:w-96'>
          <div className='w-full flex bg-blue-700 p-5 rounded-full'>
            <input type="text" className='flex-grow bg-transparent' />
            <FontAwesomeIcon icon={faChevronDown} className='p-1' />
          </div>
        </div>
        <div className='w-screen flex flex-col pt-10 text-center md:w-64 md:pt-0'>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Dummy Link</a>
          <a href="#">Terms</a>
          <a href="#">Policy</a>
        </div>
        <div className='w-screen pt-10 flex flex-col text-center md:w-64 md:pt-0'>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Dummy Link</a>
          <a href="#">Terms</a>
          <a href="#">Policy</a>
        </div>
        <div className='w-screen pt-10 flex flex-col text-center md:w-64 md:pt-0'>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Dummy Link</a>
          <a href="#">Terms</a>
          <a href="#">Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer