import React from 'react';
import { render } from '@testing-library/react';
import Typography, {
  ElementEnum,
  FontSizeEnum,
  TextColorEnum,
  TypographyProps,
} from './Typography';

describe('Typography Component', () => {
  it('should render default props', () => {
    const { container } = render(<Typography>Hello World</Typography>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="text-black text-base font-normal undefined"
      >
        Hello World
      </div>
    `);
  });

  it('should render with different element', () => {
    const { container } = render(
      <Typography element={ElementEnum.H1}>Hello World</Typography>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <h1
        class="text-black text-base font-normal undefined"
      >
        Hello World
      </h1>
    `);
  });

  it('should render with different font size', () => {
    const { container } = render(
      <Typography fontSize={FontSizeEnum['3XL']}>Hello World</Typography>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="text-black text-3xl font-normal undefined"
      >
        Hello World
      </div>
    `);
  });

  it('should render with different text color', () => {
    const { container } = render(
      <Typography textColor={TextColorEnum.WHITE}>Hello World</Typography>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="text-white text-base font-normal undefined"
      >
        Hello World
      </div>
    `);
  });

  it('should render with all props', () => {
    const typographyProps: TypographyProps = {
      children: 'Hello World',
      element: ElementEnum.H2,
      fontSize: FontSizeEnum.XL,
      textColor: TextColorEnum.WHITE,
    };

    const { container } = render(<Typography {...typographyProps} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <h2
        class="text-white text-xl font-normal undefined"
      >
        Hello World
      </h2>
    `);
  });
});
