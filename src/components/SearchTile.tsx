import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {styles} from '../screens/Search/styles';
import {SearchQuery_search} from '../types/graphql';
import Image from 'react-native-fast-image';
import {StackNavigationProp} from '@react-navigation/stack';
import {SearchStackParamList} from '../types/Navigation';
import {useNavigation} from '@react-navigation/native';

type SearchTypeProps = {
  item: SearchQuery_search;
};

type SearchScreenProp = StackNavigationProp<SearchStackParamList, 'Search'>;

export const SearchTile: React.FC<SearchTypeProps> = ({item}) => {
  const navigation = useNavigation<SearchScreenProp>();

  return (
    <View style={styles.detailContainer}>
      {item.thumbnail && (
        <Image source={{uri: item.thumbnail}} style={styles.img} />
      )}

      <View style={styles.textDetails}>
        <Text numberOfLines={1} style={styles.broadcastName}>
          {item.podcastName}
        </Text>
        <Text numberOfLines={1} style={styles.artist}>
          {item.artist}
        </Text>
        <Pressable
          onPress={() =>
            navigation.navigate('BroadCastDetails', {selectedItem: item})
          }>
          <Text style={styles.episodes}>{item.episodesCount} episodes</Text>
        </Pressable>
      </View>
    </View>
  );
};
