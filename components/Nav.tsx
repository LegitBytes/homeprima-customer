import { faCompass, faSearch, faGear, faHeart } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import NavIcons from './NavIcons';

type Style = {
  style: string
}

const Nav: NextPage<Style> = ({style}) => {
  const router = useRouter()

  return (
    <div className={style}>
      <NavIcons Icon={faCompass} style={style} title="Discover" active={router.asPath == '/'} link="/" />
      <NavIcons Icon={faSearch} title="Search" style={style} active={router.asPath == '/search'} link="/search" />
      <NavIcons Icon={faHeart} title="Favourite" style={style} active={router.asPath == '/favourite'} link="/favourite" />
      <NavIcons Icon={faGear} title="Settings" style={style} active={router.asPath == '/settings'} link="/settings" />
    </div>
  );
}

export default Nav