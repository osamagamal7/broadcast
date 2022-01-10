import React from 'react';
import {View, Text} from 'react-native';

import {getReadableDuration, getWeekDay} from '../lib/dateTimeHelpers';
import {styles} from '../screens/BroadCastDetails/styles';
import {FeedQuery_feed} from '../types/graphql';

type DetailsHeaderType = {
  item: FeedQuery_feed;
};

export const ItemDetailsTile: React.FC<DetailsHeaderType> = ({item}) => {
  return (
    <View style={styles.detailsRowTile}>
      <Text style={styles.day}>{getWeekDay(new Date(item.pubDate))}</Text>
      <Text style={styles.podcasTileTitle}>{item.title}</Text>
      <Text numberOfLines={2} style={styles.podcasTileDescription}>
        {item.description}
      </Text>
      <Text style={styles.podcasTileDuration}>
        {getReadableDuration(item.duration)}
      </Text>
    </View>
  );
};
