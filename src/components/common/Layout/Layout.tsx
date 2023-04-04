import { GiHamburgerMenu } from 'react-icons/gi';
import { BsBellFill } from 'react-icons/bs';
import { MdOutlineSettingsPower } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';
import { IconContext } from 'react-icons/lib';
import Typography, {
  FontSizeEnum,
  FontWeightEnum,
  TextColorEnum,
} from '@/components/Typography/Typography';

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

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <IconContext.Provider value={{ color: ICON_COLOR, size: ICON_SIZE }}>
        <nav className="fix flex justify-between bg-blue w-screen items-center px-5 h-16">
          <div className="w-1/3">
            <GiHamburgerMenu />
          </div>
          <div className="flex justify-center w-1/3">
            <Image
              src="/tmdb_mobile.svg"
              alt="tmdb mobile logo"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
            />
          </div>
          <div className="flex justify-between w-1/3">
            <BsBellFill />
            <MdOutlineSettingsPower />
            <IconContext.Provider
              value={{ color: SEARCH_ICON_COLOR, size: ICON_SIZE }}
            >
              <BiSearch />
            </IconContext.Provider>
          </div>
        </nav>
        {children}
        <footer className="bg-blue py-10 px-5">
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
      </IconContext.Provider>
    </>
  );
};

export default Layout;
