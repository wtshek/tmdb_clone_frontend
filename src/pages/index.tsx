import { Banner } from '@/components/Home';
import { Carousel } from '@/components/Home/Carousel';
import { BASE_URL_DEV } from '@/utils/constants';
import {
  CarouselItem,
  PanelType,
  PopularTabs,
  TrendingTabs,
} from '@/utils/types';

const START_INDEX = 0;
const TOTAL_CAROUSEL_ITEM = 10;

type CarouselType = {
  end: number;
  panel: string;
  start: number;
  total: number;
  data: CarouselItem[];
};

type HomeProps = {
  carousels: CarouselType[];
};

const getHeader = (panel: string): string => panel.toUpperCase();

const popularTabs = Object.values(PopularTabs);
const trendingTabs = Object.values(TrendingTabs);

export default function Home({ carousels }: HomeProps) {
  return (
    <main className="max-w-[1300px] m-auto">
      <Banner />
      {carousels.map(({ panel, data }) => (
        <Carousel
          key={panel}
          header={getHeader(panel)}
          data={data}
          tabs={panel === PanelType.Popular ? popularTabs : trendingTabs}
        />
      ))}
    </main>
  );
}

export async function getServerSideProps() {
  const panels = Object.values(PanelType);
  const carousels = [];

  for await (const panel of panels) {
    const query = new URLSearchParams({
      panel,
      start: `${START_INDEX}`,
      total: `${TOTAL_CAROUSEL_ITEM}`,
    });
    //TODO: make it ready for production
    const res = await fetch(`${BASE_URL_DEV}/panel?${query.toString()}`);
    const json = await res.json();
    carousels.push(json);
  }

  return {
    props: {
      carousels,
    },
  };
}
