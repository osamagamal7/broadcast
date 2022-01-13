import React from 'react';
import {View, Text, ActivityIndicator, Pressable} from 'react-native';
import {styles} from '../screens/BroadCastDetails/styles';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';

import {FeedQuery_feed, SearchQuery_search} from '../types/graphql';
import {theme} from '../assets/theme/colors';
import {usePlayerContext} from '../context/PlayerProvider';

type DetailsHeaderType = {
  headerData: FeedQuery_feed;
  loading: boolean;
  selectedItem: SearchQuery_search;
};

export const DetailsHeaderList: React.FC<DetailsHeaderType> = ({
  headerData,
  loading,
  selectedItem,
}) => {
  const {play} = usePlayerContext();
  return (
    <View style={styles.listHeaderComponent}>
      {/* first row container */}

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 3}}>
          {selectedItem.thumbnail && (
            <Image source={{uri: selectedItem.thumbnail}} style={styles.img} />
          )}
        </View>
        <View style={{flex: 0.5}} />
        <View style={{flex: 6.5}}>
          <Text style={styles.podcastName}>{selectedItem.podcastName}</Text>
          <Text style={styles.artistName}>{selectedItem.artist}</Text>
          <Text style={styles.subscribed}>Subscribed</Text>
        </View>
      </View>

      {/* Play Container */}
      <View style={styles.playContainer}>
        <View
          style={{
            flex: 1.7,
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => {
              if (!headerData) {
                return;
              }
              play({
                title: headerData.title,
                artwork: headerData.image ?? selectedItem.thumbnail,
                id: headerData.linkUrl,
                url: headerData.linkUrl,
                artist: selectedItem.artist,
              });
            }}>
            <Icon name="play" color={theme.colorBlueLight} size={35} />
          </Pressable>
        </View>

        <View style={{flex: 8.3}}>
          <Text style={styles.playText}>Play</Text>
          <Text style={styles.title}>{headerData?.title}</Text>
        </View>
      </View>

      {/* Episodes  */}

      <Text style={styles.episodes}>Episodes</Text>

      {loading && (
        <ActivityIndicator size="large" color={theme.colorBlueLight} />
      )}
    </View>
  );
};
