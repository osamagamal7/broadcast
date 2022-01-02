import {SearchQuery_search} from './graphql';

export type RootStackParamList = {
  Tabs: undefined;
};

export type ListenNowStackParamList = {
  ListenNow: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
  BroadCastDetails: {
    item: SearchQuery_search;
  };
};

export type LibraryStackParamList = {
  Library: undefined;
};

export type MainBottomTabParamList = ListenNowStackParamList &
  SearchStackParamList &
  LibraryStackParamList;
