import type { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHandSparkles,faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';

const Features: NextPage = () => {
  return (
    <div className='mt-32 flew'>
      <h1 className='font-medium text-5xl text-center'>
        <span className='text-blue-500'>What</span> we offer
      </h1>
      <div className='flex flex-col mt-10 md:flex-row'>
        <div className="flex flex-col mt-10 px-4 md:px-12">
          <FontAwesomeIcon className='text-blue-500 p-5 mx-auto rounded-full bg-white w-4 shadow-lg shadow-blue-100' icon={faHandSparkles} size={'lg'}/>
          <h2 className="text-lg mt-6 text-center ">Clean</h2>
          <p className="font-light text-center mt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque perferendis impedit quaerat, ipsam repellendus recusandae ea praesentium laborum odit quisquam facere explicabo enim. Et laboriosam rem labore autem illum.</p>
        </div>
        <div className="flex flex-col mt-10 px-4 md:px-12">
          <FontAwesomeIcon className='text-blue-500 p-5 mx-auto rounded-full bg-white w-4 shadow-lg shadow-blue-100' icon={faBolt} size={'lg'}/>
          <h2 className="text-lg mt-6 text-center ">Modern</h2>
          <p className="font-light text-center mt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque perferendis impedit quaerat, ipsam repellendus recusandae ea praesentium laborum odit quisquam facere explicabo enim. Et laboriosam rem labore autem illum.</p>
        </div>
        <div className="flex flex-col mt-10 px-4 md:px-12">
          <FontAwesomeIcon className='text-blue-500 p-5 mx-auto rounded-full bg-white w-4 shadow-lg shadow-blue-100' icon={faMoneyBill1Wave} size={'lg'}/>
          <h2 className="text-lg mt-6 text-center ">Affordable</h2>
          <p className="font-light text-center mt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque perferendis impedit quaerat, ipsam repellendus recusandae ea praesentium laborum odit quisquam facere explicabo enim. Et laboriosam rem labore autem illum.</p>
        </div>
      </div>
    </div>
  );
}

export default Features