import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from '../screens/BroadCastDetails/styles';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';

import {SearchQuery_search} from '../types/graphql';
import {theme} from '../assets/theme/colors';

type DetailsHeaderType = {
  selectedItem: SearchQuery_search;
  title: string;
  loading: boolean;
};

export const DetailsHeaderList: React.FC<DetailsHeaderType> = ({
  title,
  loading,
  selectedItem,
}) => {
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
          <Icon name="play" color={theme.colorBlueLight} size={35} />
        </View>

        <View style={{flex: 8.3}}>
          <Text style={styles.playText}>Play</Text>
          <Text style={styles.title}>{title}</Text>
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
