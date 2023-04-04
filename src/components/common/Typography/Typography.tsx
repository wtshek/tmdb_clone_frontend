import React from 'react';

export enum ElementEnum {
  DIV = 'div',
  SPAN = 'span',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum FontSizeEnum {
  SM = 'text-sm',
  BASE = 'text-base',
  LG = 'text-lg',
  XL = 'text-xl',
  '2XL' = 'text-2xl',
  '3XL' = 'text-3xl',
  '4XL' = 'text-4xl',
  '5XL' = 'text-5xl',
  '6XL' = 'text-6xl',
}

export enum TextColorEnum {
  WHITE = 'text-white',
  BLACK = 'text-black',
  GRAY = 'text-gray',
}

export enum FontWeightEnum {
  BOLD = 'font-bold',
  NORMAL = 'font-normal',
}

export interface TypographyProps {
  children: string;
  element?: ElementEnum;
  fontSize?: FontSizeEnum;
  textColor?: TextColorEnum;
  fontWeight?: FontWeightEnum;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  element = ElementEnum.DIV,
  fontSize = FontSizeEnum.BASE,
  textColor = TextColorEnum.BLACK,
  fontWeight = FontWeightEnum.NORMAL,
}) => {
  const Element = element;

  return (
    <Element className={`${textColor} ${fontSize} ${fontWeight}`}>
      {children}
    </Element>
  );
};

export default Typography;
