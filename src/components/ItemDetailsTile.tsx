import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {getReadableDuration, getWeekDay} from '../lib/dateTimeHelpers';
import {styles} from '../screens/BroadCastDetails/styles';
import {FeedQuery_feed, SearchQuery_search} from '../types/graphql';
import {BroadcastStackParamList} from '../types/Navigation';

type DetailsHeaderType = {
  item: FeedQuery_feed;
  selectedItem: SearchQuery_search;
};

type BroadcastDetailsProp = StackNavigationProp<
  BroadcastStackParamList,
  'BroadCastDetails'
>;

export const ItemDetailsTile: React.FC<DetailsHeaderType> = ({
  selectedItem,
  item,
}) => {
  const navigation = useNavigation<BroadcastDetailsProp>();

  return (
    <View style={styles.detailsRowTile}>
      <Text style={styles.day}>{getWeekDay(new Date(item.pubDate))}</Text>
      <Pressable
        onPress={() =>
          navigation.navigate('EpisodeDetails', {
            broadcastData: item,
            selectedItem: selectedItem,
          })
        }>
        <Text style={styles.podcasTileTitle}>{item.title}</Text>
      </Pressable>
      <Text numberOfLines={2} style={styles.podcasTileDescription}>
        {item.summary
          .replace(/<[^>]*>/g, ' ')
          .replace(/\s{2,}/g, ' ')
          .trim()}
      </Text>

      <Text style={styles.podcasTileDuration}>
        {getReadableDuration(item.duration)}
      </Text>
    </View>
  );
};
