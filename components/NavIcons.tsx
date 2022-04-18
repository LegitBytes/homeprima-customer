import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import Link from 'next/link';

type NavIcons = {
  Icon: IconProp
  title: string
  active?: boolean
  link: string
  style: string
}

const NavIcons: NextPage<NavIcons> = ({Icon, title, active, link, style}) => {
  return (
    <Link href={link}>
      <a>
      <div className={`${style}-icons ${active ? 'text-blue-500' : 'text-gray-500'}`}>
        <FontAwesomeIcon icon={Icon} size={'lg'} className='flex'/>
        <p className='text-sm px-2'>{title}</p>
      </div>
    </a>
    </Link>
  );
}

export default NavIcons