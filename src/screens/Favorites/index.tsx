import React from 'react';
import {View, Pressable, Dimensions, Text, ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';

import {fonts} from '../../assets';
import {theme} from '../../assets/theme/colors';

import {PodcastItem} from '../../components/PodcastItem';
import {usePlayerContext} from '../../context/PlayerProvider';

const windowHeight = Dimensions.get('window').height;

export const FavoriteTracks: React.FC = () => {
  const {favoriteTracks, toggleFavorite} = usePlayerContext();

  if (favoriteTracks.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colorWhite,
        }}>
        <Text
          style={{fontFamily: fonts.RobotoFontRegular, fontSize: scale(16)}}>
          No Favorites Added Yet!
        </Text>
      </View>
    );
  }
  return (
    <ScrollView style={{backgroundColor: theme.colorWhite, flex: 1}}>
      {favoriteTracks.map(item => (
        <Pressable onPress={() => {}} key={item.id}>
          <PodcastItem
            image={String(item.artwork)}
            mainTitle={item.title!}
            title={item.artist!}
            height={windowHeight / 9}
            onRemoveTrack={() => toggleFavorite(item)}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};
