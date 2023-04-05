import { render, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { Banner } from './Banner';

jest.mock('next/router', () => require('next-router-mock'));

describe('Banner component', () => {
  it('matches inline snapshot', () => {
    const { container } = render(<Banner />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <section
          class="relative flex flex-col items-start justify-center p-5 min-h-[300px] max-h-[360px] bg-[url('/image/stephen_king_banner.jpeg')] bg-cover bg-no-repeat"
        >
          <h2
            class="text-white text-5xl font-bold undefined"
          >
            Welcome.
          </h2>
          <h3
            class="text-white text-2xl font-normal undefined"
          >
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <div
            class="relative flex items-center bg-white rounded-full w-full h-[46px] mt-5"
          >
            <input
              class="w-full px-4 py-2 rounded-full outline-none"
              data-testid="search-input"
              placeholder="Search..."
              type="text"
              value=""
            />
            <button
              class="absolute right-0 px-4 py-2 rounded-full bg-gradient-to-r from-[rgb(30,213,169)] to-[rgb(1,180,228)] text-white h-full"
              data-testid="search-button"
            >
              Search
            </button>
          </div>
        </section>
      </div>
    `);
  });

  it('search function works', () => {
    const searchTerm = 'test search query';
    const { getByTestId } = render(<Banner />);
    const searchInput = getByTestId('search-input');
    const searchButton = getByTestId('search-button');
    fireEvent.change(searchInput, { target: { value: searchTerm } });
    fireEvent.click(searchButton);
    expect(mockRouter).toMatchObject({
      asPath: `/search?q=${encodeURIComponent(searchTerm.trim())}`,
      pathname: '/search',
      query: { q: searchTerm },
    });
  });
});
