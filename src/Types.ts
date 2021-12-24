export type RootStackParamList = {
  Tabs: undefined;
};

export type ListenNowStackParamList = {
  ListenNow: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
};

export type LibraryStackParamList = {
  Library: undefined;
};

export type MainBottomTabParamList = ListenNowStackParamList &
  SearchStackParamList &
  LibraryStackParamList;
