import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../screens/Search/styles';
import {SearchQuery_search} from '../types/graphql';
import FastImage from 'react-native-fast-image';

type SearchTypeProps = {
  item: SearchQuery_search;
};

export const SearchTile: React.FC<SearchTypeProps> = ({item}) => {
  return (
    <View style={styles.detailContainer}>
      {/* //add item if there's a thumbnail */}
      {item.thumbnail && (
        <FastImage source={{uri: item.thumbnail}} style={styles.img} />
      )}

      <View style={styles.textDetails}>
        <Text numberOfLines={2}>{item.podcastName}</Text>
        <Text>{item.artist}</Text>
        <Text>{item.episodesCount}</Text>
      </View>
    </View>
  );
};
