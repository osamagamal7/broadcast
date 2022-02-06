import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Pressable} from 'react-native';
import {styles} from '../screens/BroadCastDetails/styles';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';

import {FeedQuery_feed, SearchQuery_search} from '../types/graphql';
import {theme} from '../assets/theme/colors';
import {usePlayerContext} from '../context/PlayerProvider';
import {useDBContext} from '../context/DBContext';
import {BroadcastModel} from '../models/BroadcastModel';

type DetailsHeaderType = {
  feedData: FeedQuery_feed;
  loading: boolean;
  selectedItem: SearchQuery_search;
};

export const DetailsHeaderList: React.FC<DetailsHeaderType> = ({
  feedData,
  loading,
  selectedItem,
}) => {
  const {play} = usePlayerContext();
  const {subToBroadcast, broadcasts, removeBroadcast} = useDBContext();

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
          <Pressable
            onPress={() => {
              const i = broadcasts?.findIndex(
                f => f.name == selectedItem.podcastName,
              );
              if (i) {
                subToBroadcast(
                  new BroadcastModel({
                    artist: selectedItem?.artist,
                    episodesCount: selectedItem?.episodesCount,
                    feedUrl: selectedItem?.feedUrl,
                    name: selectedItem?.podcastName,
                    thumbnail: selectedItem?.thumbnail,
                  }),
                );
              } else {
                removeBroadcast(
                  new BroadcastModel({
                    artist: selectedItem?.artist,
                    episodesCount: selectedItem?.episodesCount,
                    feedUrl: selectedItem?.feedUrl,
                    name: selectedItem?.podcastName,
                    thumbnail: selectedItem?.thumbnail,
                  }),
                );
              }
            }}>
            <Text style={styles.subscribed}>
              {broadcasts?.findIndex(f => f.name == selectedItem.podcastName)
                ? 'Subscribe'
                : 'Unsubscribe'}
            </Text>
          </Pressable>
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
              if (!feedData) {
                return;
              }
              play({
                title: feedData.title,
                artwork: feedData.image ?? selectedItem.thumbnail,
                id: feedData.linkUrl,
                url: feedData.linkUrl,
                artist: selectedItem.artist,
              });
            }}>
            <Icon name="play" color={theme.colorBlueLight} size={35} />
          </Pressable>
        </View>

        <View style={{flex: 8.3}}>
          <Text style={styles.playText}>Play</Text>
          <Text style={styles.title}>{feedData?.title}</Text>
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
