import Typography, {
  FontSizeEnum,
  TextColorEnum,
} from '@/components/common/Typography/Typography';

export enum NavItemType {
  MAIN = 'main',
  SUB = 'sub',
}

export type NavItem = {
  type: NavItemType;
  key: string;
  label: string;
  href: string;
};

type SideNavProps = {
  isOpen: boolean;
  items: NavItem[];
};

const SideNav = ({ isOpen, items }: SideNavProps) => {
  return (
    <div className="relative">
      {/* Menu that slides in from the left */}
      <div
        className={`fixed top-16 left-0 h-screen w-64 bg-blue-blur backdrop-blur-[20px]  z-50 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu contents */}
        <nav className="py-8 px-4">
          <ul>
            {items.map((item) => {
              const { key, label, type } = item;
              const isMain = type === NavItemType.MAIN;
              return (
                <li key={key} className="mt-2.5">
                  <Typography
                    textColor={
                      isMain ? TextColorEnum.WHITE : TextColorEnum.GRAY
                    }
                    fontSize={isMain ? FontSizeEnum.XL : FontSizeEnum.BASE}
                  >
                    {label}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
