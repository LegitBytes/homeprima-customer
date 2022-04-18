import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';

const NewsLetter: NextPage = () => {
  return (
    <div className='bg-slate-300 py-32'>
      <h1 className=' text-3xl px-4 text-center font-light'>Want to recieve latest offers on hotels?</h1>
      <h1 className='text-2xl text-center pt-3 font-bold text-blue-900'><span className='text-blue-500'>Subscribe</span> to our Newsletter</h1>
      <div className='flex mt-10 shadow-xl max-w-md mx-4 bg-white rounded-full p-1 sm:mx-auto'>
        <FontAwesomeIcon icon={faEnvelope} className='p-4 text-gray-400' />
        <input type="text" placeholder='Email Address' className='outline-none p-2 flex-grow bg-transparent' />
        <button className='py-2 px-4 text-sm bg-blue-500 text-white rounded-full'>
           <FontAwesomeIcon icon={faPaperPlane} size={'lg'} />
        </button>
      </div>
    </div>
  );
}

export default NewsLetter