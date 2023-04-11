export enum PanelType {
  Popular = 'popular',
  Trending = 'trending',
}

export enum PopularTabs {
  ForRents = 'for_rents',
  OnTv = 'on_tv',
  InTheaters = 'in_theaters',
  Streaming = 'streaming',
}

export enum TrendingTabs {
  Today = 'today',
  ThisWeek = 'this_week',
}

export type CarouselItem = {
  available: string;
  created_at: string;
  id: number;
  image: string;
  media_type: string;
  title: string;
  tmdb_id: string;
  updated_at: string;
};
