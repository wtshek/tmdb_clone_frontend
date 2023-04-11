// TODO: fix the scroll
// TODO: define the data structure, also add a layer to filter out the necessary information

import Image from 'next/image';
import {
  FontWeightEnum,
  TextColorEnum,
  Typography,
} from '../common/Typography';
import CreditScore from './CreditScore';
import Dropdown from './Dropdown';
import { CarouselItem } from '@/utils/types';
import { IMAGE_BASE_URL } from '@/utils/constants';

type CarouselProps = {
  header: string;
  data: CarouselItem[];
  tabs?: string[]; // TODO: need to change
};

const CarouselItemImageWidth = 150;
const CarouselItemImageHeight = 225;

export const Carousel = ({ header, data, tabs }: CarouselProps) => {
  return (
    <section className="pt-8">
      <div className="flex">
        <h2 className="px-4">{header}</h2>
        {tabs && <Dropdown items={tabs} />}
      </div>
      <div className="flex overflow-x-auto whitespace-nowrap py-5">
        {data.map(({ image, title }, index) => {
          const imageUrl = image
            ? `${IMAGE_BASE_URL}${image}`
            : '/image/avatar.jpeg';

          return (
            <div
              className="inline-block ml-5 min-w-[150px] min-h-[400px]"
              key={index}
            >
              <div className="relative">
                {image && (
                  // TODO: fix the hostname issue, then use next/image
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imageUrl}
                    width={CarouselItemImageWidth}
                    height={CarouselItemImageHeight}
                    alt="carousel-item-image"
                    className="rounded-lg"
                  />
                )}
                <CreditScore
                  score={32}
                  className="absolute -bottom-3.5 left-3 w-[37px] h-[37px]"
                />
              </div>
              <div className="pt-[26px] px-2.5 break-words whitespace-break-spaces max-w-[150px]">
                <Typography fontWeight={FontWeightEnum.BOLD}>
                  {title}
                </Typography>
                <Typography textColor={TextColorEnum.GRAY}>
                  Dec 14, 2022
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
