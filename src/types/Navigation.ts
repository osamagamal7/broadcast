import {NavigatorScreenParams} from '@react-navigation/native';
import {FeedQuery_feed, SearchQuery_search} from './graphql';

export type RootStackParamList = {
  Tabs: undefined;
};

export type ListenNowStackParamList = {
  ListenNow: undefined;
};

export type BroadcastStackParamList = {
  BroadCastDetails: {
    selectedItem: SearchQuery_search;
  };
  EpisodeDetails: {
    broadcastData: FeedQuery_feed;
    selectedItem: SearchQuery_search;
  };
};

export type SearchStackParamList = {
  Search: undefined;
  BroadCastDetailsNav: NavigatorScreenParams<BroadcastStackParamList>;
};

export type LibraryStackParamList = {
  Library: undefined;
};

export type MainBottomTabParamList = ListenNowStackParamList &
  SearchStackParamList &
  LibraryStackParamList;
