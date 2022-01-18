import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Image from 'react-native-fast-image';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import RenderHtml from 'react-native-render-html';

import {theme} from '../../assets/theme/colors';
import {BroadcastStackParamList} from '../../types/Navigation';
import {usePlayerContext} from '../../context/PlayerProvider';
import {getReadableDuration} from '../../lib/dateTimeHelpers';
import {fonts} from '../../assets';

const windowWidth = Dimensions.get('window').height;

type EpisodeScreenProp = RouteProp<BroadcastStackParamList, 'EpisodeDetails'>;

export const EpisodeDetailScreen: React.FC = () => {
  // broadcastData == episode
  const {broadcastData: episode, selectedItem} =
    useRoute<EpisodeScreenProp>().params;

  const {play} = usePlayerContext();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.broadcastDetailsHeader}>
          <Image
            source={{uri: episode.image ?? selectedItem.thumbnail}}
            style={styles.img}
          />
          <View style={{flex: 0.3}} />

          <Text style={styles.title}>{episode.title}</Text>
          <View style={{flex: 2}} />
        </View>

        <View style={styles.playContainer}>
          <Pressable
            onPress={() => {
              play({
                title: episode.title,
                artwork: episode.image ?? selectedItem.thumbnail,
                id: episode.linkUrl,
                url: episode.linkUrl,
                artist: selectedItem.artist,
              });
            }}>
            <Icon
              name="play"
              color={theme.colorBlueLight}
              size={windowWidth / 25}
            />
          </Pressable>

          <View style={styles.playAndDuration}>
            <Text style={styles.play}>Play</Text>
            <Text style={styles.duration}>
              {getReadableDuration(episode.duration)}
            </Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View>
          <Text style={styles.notes}>Episode Notes</Text>
          <RenderHtml
            contentWidth={windowWidth}
            source={{html: episode.description}}
            tagsStyles={{
              a: {color: theme.colorBlueLight, fontWeight: 'bold'},
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  broadcastDetailsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    backgroundColor: theme.colorWhite,
  },
  duration: {
    fontFamily: fonts.RobotoFontLight,
  },
  innerContainer: {
    padding: scale(15),
  },
  img: {
    borderRadius: scale(10),

    flex: 2,
    height: windowWidth / 10,
  },
  notes: {
    fontSize: scale(20),
    fontFamily: fonts.RobotoFontBold,
    marginBottom: scale(10),
  },
  playContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: scale(10),
  },
  playAndDuration: {
    marginLeft: scale(5),
  },
  play: {
    fontFamily: fonts.RobotoFontBold,
    fontSize: scale(20),
  },
  separator: {
    backgroundColor: theme.colorDarkGrey,
    height: StyleSheet.hairlineWidth,
    marginVertical: scale(15),
    width: '100%',
  },
  title: {
    flex: 5.7,
    fontFamily: fonts.RobotoFontRegular,
    fontSize: scale(16),
  },
});
