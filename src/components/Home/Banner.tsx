import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import {
  ElementEnum,
  FontSizeEnum,
  FontWeightEnum,
  TextColorEnum,
  Typography,
} from '../common/Typography';

export const Banner = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };
  return (
    <section className="relative flex flex-col items-start justify-center p-5 min-h-[300px] max-h-[360px] bg-[url('/image/stephen_king_banner.jpeg')] bg-cover bg-no-repeat">
      <Typography
        textColor={TextColorEnum.WHITE}
        element={ElementEnum.H2}
        fontSize={FontSizeEnum['5XL']}
        fontWeight={FontWeightEnum.BOLD}
      >
        Welcome.
      </Typography>
      <Typography
        textColor={TextColorEnum.WHITE}
        element={ElementEnum.H3}
        fontSize={FontSizeEnum['2XL']}
      >
        Millions of movies, TV shows and people to discover. Explore now.
      </Typography>
      <div className="relative flex items-center bg-white rounded-full w-full h-[46px] mt-5">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-full outline-none"
          data-testid="search-input"
        />
        <button
          className="absolute right-0 px-4 py-2 rounded-full bg-gradient-to-r from-[rgb(30,213,169)] to-[rgb(1,180,228)] text-white h-full"
          onClick={handleSearch}
          data-testid="search-button"
        >
          Search
        </button>
      </div>
    </section>
  );
};
