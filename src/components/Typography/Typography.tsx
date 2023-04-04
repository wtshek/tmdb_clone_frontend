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
  SM = 'sm',
  BASE = 'base',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  '3XL' = '3xl',
  '4XL' = '4xl',
  '5XL' = '5xl',
  '6XL' = '6xl',
}

export enum TextColorEnum {
  WHITE = 'white',
  BLACK = 'black',
  GRAY = 'gray',
  GRADIENT = 'gradient',
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

const Typography: React.FC<TypographyProps> = ({
  children,
  element = ElementEnum.DIV,
  fontSize = FontSizeEnum.BASE,
  textColor = TextColorEnum.BLACK,
  fontWeight = FontWeightEnum.NORMAL,
}) => {
  const Element = element;

  return (
    <Element className={`text-${textColor} text-${fontSize} ${fontWeight}`}>
      {children}
    </Element>
  );
};

export default Typography;
