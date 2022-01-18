export interface SearchQuery_search {
  __typename: 'Podcast';
  artist: string;
  episodesCount: number;
  feedUrl: string;
  podcastName: string;
  thumbnail: string;
  genres: string[];
}

export interface SearchQuery {
  search: SearchQuery_search[];
}

export interface SearchQueryVariables {
  term: string;
}

export interface FeedQuery_feed {
  __typename: 'FeedItem';
  description: string;
  duration: string;
  image: string | null;
  linkUrl: string;
  pubDate: string;
  text: string;
  title: string;
  summary: string;
}

export interface FeedQuery {
  feed: FeedQuery_feed[];
}

export interface FeedQueryVariables {
  feedUrl: string;
}
