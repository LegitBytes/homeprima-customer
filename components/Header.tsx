import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser
} from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import Image from 'next/image';
import Nav from './Nav';
import { 
  faCommentDots,
  faUserCircle,
  faCalendar,
} from '@fortawesome/free-regular-svg-icons';
import useComponentVisible from '../hooks/OutsideClickAlerter';
import { useRef } from 'react';

const userMenu = [
  {
    icon: faUserCircle,
    title: 'Profile'
  },
  {
    icon: faCalendar,
    title: 'Booking Overview'
  },
  {
    icon: faCommentDots,
    title: 'Help and Support'
  }
]

const Header: NextPage = () => {
  const {
    ref: menuReference, 
    btnRef: menuToggleButton , 
    isComponentVisible: menuVisible, 
    setIsComponentVisible: setMenuVisible
  } = useComponentVisible(false)
  const menuBtnRef = useRef(null)

  return (
    <div className='flex pt-4 relative justify-between bg-slate-100'>
      <div className='h-10'>
        <Image
          className=''
          src="/logo.png"
          alt='Home Prima Logo'
          width={140}
          height={55}
          layout='fixed'
          objectFit='contain'
        />
      </div>
      <Nav style='desktop-nav' />
      <div className='rounded-full bg-blue-500 h-10 cursor-pointer' ref={menuToggleButton} onClick={() => {menuVisible ? setMenuVisible(false) : setMenuVisible(true)}}>
        <FontAwesomeIcon className='text-white pt-2 pl-2 pr-2 w-6' size='lg' icon={faUser}/>
      </div>
      <div ref={menuReference} className={`absolute right-0 top-16 bg-white z-10 rounded-2xl shadow-2xl overflow-hidden transition-[visibility,opacity] transform-gpu duration-100 ease-in ${menuVisible ? 'visible opacity-100': 'invisible opacity-0'}`}>
        {userMenu.map(menuItem => (
          <div className='px-5 py-3 hover:bg-blue-500 hover:text-white cursor-pointer group transition duration-100 ease-in' key={menuItem.title}>
            <FontAwesomeIcon 
              icon={menuItem.icon}
              className='text-blue-500 pr-4 group-hover:text-white'
              size={'lg'}
            />
            {menuItem.title}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Header