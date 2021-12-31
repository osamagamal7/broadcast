import {gql} from '@apollo/client';

export const SEARCH_QUERY = gql`
  query SearchQuery($term: String!) {
    search(term: $term) {
      artist
      episodesCount
      feedUrl
      podcastName
      thumbnail
      genres
    }
  }
`;
