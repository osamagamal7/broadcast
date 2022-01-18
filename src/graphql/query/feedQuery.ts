import gql from 'graphql-tag';

const feedQuery = gql`
  query FeedQuery($feedUrl: String!) {
    feed(feedUrl: $feedUrl) {
      description
      duration
      image
      linkUrl
      pubDate
      title
      text
      summary
    }
  }
`;

export default feedQuery;
