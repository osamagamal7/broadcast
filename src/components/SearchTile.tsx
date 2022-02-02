import React from 'react';

import {SearchQuery_search} from '../types/graphql';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchStackParamList} from '../types/Navigation';
import {useNavigation} from '@react-navigation/native';
import {PodcastItem} from './PodcastItem';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

type SearchTypeProps = {
  item: SearchQuery_search;
};

type SearchScreenProp = StackNavigationProp<SearchStackParamList, 'Search'>;

export const SearchTile: React.FC<SearchTypeProps> = ({item}) => {
  const navigation = useNavigation<SearchScreenProp>();

  return (
    <PodcastItem
      image={item.thumbnail}
      episodeCount={item.episodesCount}
      mainTitle={item.podcastName}
      title={item.artist}
      height={windowHeight / 8}
      onPress={() =>
        navigation.navigate('BroadCastDetailsNav', {
          screen: 'BroadCastDetails',
          params: {selectedItem: item},
        })
      }
    />
  );
};
