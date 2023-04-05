// TODO: fix the scroll
// TODO: define the data structure, also add a layer to filter out the necessary information

import Image from 'next/image';
import {
  FontWeightEnum,
  TextColorEnum,
  Typography,
} from '../common/Typography';
import CreditScore from './CreditScore';

const arr = Array.from({ length: 10 }, () => 'car');
const sampleTab = ['Today', 'This Week'];

type CarouselProps = {
  header: string;
  element: JSX.Element;
  tabs: string[]; // TODO: need to change
};

const CarouselItemImageWidth = 150;
const CarouselItemImageHeight = 225;

export const Carousel = ({ header, element, tabs }: CarouselProps) => {
  return (
    <section className="pt-8">
      <div>
        <h2 className="px-4">Trending</h2>
      </div>
      <div className="overflow-x-auto whitespace-nowrap py-5">
        {arr.map((_, index) => (
          <div
            className="inline-block ml-5 w-[150px] min-h-[400px]"
            key={index}
          >
            <div className="relative">
              <Image
                src="/image/avatar.jpeg"
                width={CarouselItemImageWidth}
                height={CarouselItemImageHeight}
                alt="carousel-item-image"
                className="rounded-lg"
              />
              <CreditScore
                score={32}
                className="absolute -bottom-3.5 left-3 w-[37px] h-[37px]"
              />
            </div>
            <div className="pt-[26px] px-2.5 break-words whitespace-break-spaces">
              <Typography fontWeight={FontWeightEnum.BOLD}>
                Avatar: The Way of Water
              </Typography>
              <Typography textColor={TextColorEnum.GRAY}>
                Dec 14, 2022
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
