import React from 'react';
import { render } from '@testing-library/react';
import CreditScore from './CreditScore';

describe('CreditScore Test Suite', () => {
  it('renders credit score component correctly with green stroke', () => {
    const { container } = render(<CreditScore score={75} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <svg
        class="undefined bg-black rounded-full"
        fill="black"
        viewBox="0 0 80 80"
      >
        <path
          d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
          stroke="green"
          stroke-dasharray="219.99078369140625"
          stroke-dashoffset="-54.99769592285156"
          stroke-width="4"
          style="transform: rotate(90deg) translate(0px, -80px);"
        />
        <text
          class="value text-blue-500"
          fill="#fff"
          font-size="1.7rem"
          text-anchor="middle"
          x="50%"
          y="60%"
        >
          75
        </text>
      </svg>
    `);
  });

  it('renders credit score component correctly with yellow stroke', () => {
    const { container } = render(<CreditScore score={60} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <svg
        class="undefined bg-black rounded-full"
        fill="black"
        viewBox="0 0 80 80"
      >
        <path
          d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
          stroke="yellow"
          stroke-dasharray="219.99078369140625"
          stroke-dashoffset="-87.9963134765625"
          stroke-width="4"
          style="transform: rotate(90deg) translate(0px, -80px);"
        />
        <text
          class="value text-blue-500"
          fill="#fff"
          font-size="1.7rem"
          text-anchor="middle"
          x="50%"
          y="60%"
        >
          60
        </text>
      </svg>
    `);
  });

  it('renders credit score component correctly with red stroke', () => {
    const { container } = render(<CreditScore score={32} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <svg
        class="undefined bg-black rounded-full"
        fill="black"
        viewBox="0 0 80 80"
      >
        <path
          d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
          stroke="red"
          stroke-dasharray="219.99078369140625"
          stroke-dashoffset="-149.59373291015626"
          stroke-width="4"
          style="transform: rotate(90deg) translate(0px, -80px);"
        />
        <text
          class="value text-blue-500"
          fill="#fff"
          font-size="1.7rem"
          text-anchor="middle"
          x="50%"
          y="60%"
        >
          32
        </text>
      </svg>
    `);
  });
});
