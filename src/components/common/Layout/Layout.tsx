import { GiHamburgerMenu } from 'react-icons/gi';
import { BsBellFill } from 'react-icons/bs';
import { MdOutlineSettingsPower } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';
import { IconContext } from 'react-icons/lib';
import {
  FontSizeEnum,
  FontWeightEnum,
  TextColorEnum,
  Typography,
} from '@/components/common/Typography';
import SideNav, { NavItem, NavItemType } from './SideNav';
import { useState } from 'react';

type LayoutProps = {
  children: JSX.Element;
};

const LOGO_WIDTH = 55;
const LOGO_HEIGHT = 44;
const ICON_SIZE = '22px';
const ICON_COLOR = 'white';
const SEARCH_ICON_COLOR = '#10B5E5';

const footer = {
  theBasics: {
    header: 'the basics',
    items: [
      {
        label: 'About TMDB',
        href: '/about-tmdb',
      },
      {
        label: 'Contact Us',
        href: '/contact-us',
      },
      {
        label: 'Support Forums',
        href: '/support-forums',
      },
      {
        label: 'API',
        href: '/api',
      },
      {
        label: 'System Status',
        href: '/system-status',
      },
    ],
  },
  getInvolved: {
    header: 'get involved',
    items: [
      {
        label: 'Contribution Bible',
        href: '/contribution-bible',
      },
      {
        label: 'Add New Movie',
        href: '/add-new-movie',
      },
      {
        label: 'Add New Tv Show',
        href: '/add-new-tv-show',
      },
    ],
  },
  community: {
    header: 'Community',
    items: [
      {
        label: 'Guidelines',
        href: '/guidelines',
      },
      {
        label: 'Discussion',
        href: '/discussion',
      },
      {
        label: 'Leaderboard',
        href: '/leaderboard',
      },
      {
        label: 'Follow us on Twitter',
        href: 'https://twitter.com/TMDB',
      },
    ],
  },
  legal: {
    header: 'legal',
    items: [
      {
        label: 'Terms of Use',
        href: '/terms-of-use',
      },
      {
        label: 'API Terms of Use',
        href: '/api-terms-of-use',
      },
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
      },
    ],
  },
};

const sideNav: NavItem[] = [
  {
    type: NavItemType.MAIN,
    key: 'movies',
    label: 'Movies',
    href: '/movies',
  },
  {
    type: NavItemType.MAIN,
    key: 'tvshows',
    label: 'TV Shows',
    href: '/tvshows',
  },
  {
    type: NavItemType.MAIN,
    key: 'people',
    label: 'People',
    href: '/people',
  },
  {
    type: NavItemType.SUB,
    key: 'contributionBible',
    label: 'Contribution Bible',
    href: '/contribution-bible',
  },
  {
    type: NavItemType.SUB,
    key: 'apps',
    label: 'Apps',
    href: '/apps',
  },
  {
    type: NavItemType.SUB,
    key: 'discussion',
    label: 'Discussion',
    href: '/discussion',
  },
  {
    type: NavItemType.SUB,
    key: 'leaderboard',
    label: 'Leaderboard',
    href: '/leaderboard',
  },
  {
    type: NavItemType.SUB,
    key: 'api',
    label: 'API',
    href: '/api',
  },
  {
    type: NavItemType.SUB,
    key: 'support',
    label: 'Support',
    href: '/support',
  },
  {
    type: NavItemType.SUB,
    key: 'about',
    label: 'About',
    href: '/about',
  },
  {
    type: NavItemType.SUB,
    key: 'logout',
    label: 'Logout',
    href: '/logout',
  },
];

export const Layout = ({ children }: LayoutProps) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = (): void => {
    setIsSideNavOpen((prev) => !prev);
  };

  return (
    <>
      <IconContext.Provider value={{ color: ICON_COLOR, size: ICON_SIZE }}>
        <nav className="fix flex justify-between bg-blue w-screen items-center px-5 h-16">
          <button className="w-1/3" onClick={toggleSideNav}>
            <GiHamburgerMenu />
          </button>
          <div className="flex justify-center w-1/3">
            <Image
              src="/tmdb_mobile.svg"
              alt="tmdb mobile logo"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
            />
          </div>
          <div className="flex justify-end w-1/3">
            <BsBellFill />
            <MdOutlineSettingsPower className="ml-4" />
            <IconContext.Provider
              value={{ color: SEARCH_ICON_COLOR, size: ICON_SIZE }}
            >
              <BiSearch className="ml-4" />
            </IconContext.Provider>
          </div>
        </nav>
        {children}
        <footer className="bg-blue py-10 px-5 md:flex md:justify-between md:px-16">
          {Object.entries(footer).map(([key, values]) => {
            const { header, items } = values;
            return (
              <div key={key} className="mb-8">
                <Typography
                  fontSize={FontSizeEnum.LG}
                  textColor={TextColorEnum.WHITE}
                  fontWeight={FontWeightEnum.BOLD}
                >
                  {header.toUpperCase()}
                </Typography>
                {items.map(({ label, href }) => (
                  <Typography textColor={TextColorEnum.WHITE} key={label}>
                    {label}
                  </Typography>
                ))}
              </div>
            );
          })}
        </footer>
        <SideNav isOpen={isSideNavOpen} items={sideNav} />
      </IconContext.Provider>
    </>
  );
};

export default Layout;
