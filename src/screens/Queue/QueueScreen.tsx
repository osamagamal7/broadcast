import React from 'react';
import {View, Text, SafeAreaView, Pressable, ScrollView} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import TrackPlayer, {Track} from 'react-native-track-player';
import Image from 'react-native-fast-image';

import {theme} from '../../assets/theme/colors';
import {fonts} from '../../assets';
import {usePlayerContext} from '../../context/PlayerProvider';

export const QueueScreen: React.FC = () => {
  const [queue, setQueue] = React.useState<Track[]>([]);
  const {goBack} = useNavigation();
  const {play} = usePlayerContext();

  const getQueue = async () => {
    const tracks = await TrackPlayer.getQueue();

    console.log('tracks', tracks);

    setQueue(tracks);
  };

  useFocusEffect(
    React.useCallback(() => {
      getQueue();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.btnContainer}>
          <Pressable style={{flex: 1}} onPress={goBack}>
            <Text style={styles.headerText}>Done</Text>
          </Pressable>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.headerText}>Up Next</Text>
          </View>
          <View style={{flex: 1}} />
        </View>
        <ScrollView>
          {queue.map((track, i) => (
            <Pressable
              onPress={() => {
                play(track, i);
                goBack();
              }}
              key={track.id}>
              <View style={styles.trackContainer}>
                {track.artwork && (
                  <Image source={{uri: track.artwork}} style={styles.img} />
                )}
                <View style={{flex: 0.04}} />
                <View style={{flex: 0.7}}>
                  <Text numberOfLines={1} style={styles.title}>
                    {track.title}
                  </Text>
                  <Text style={styles.subTitle}>{track.artist}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  headerText: {
    fontFamily: fonts.RobotoFontRegular,
    fontSize: scale(15),
    marginBottom: scale(20),
  },
  innerContainer: {
    flex: 1,
    padding: scale(10),
  },
  img: {
    borderRadius: scale(12),
    height: '80%',
    flex: 0.26,
  },
  subTitle: {
    fontFamily: fonts.RobotoFontLight,
  },
  trackContainer: {
    // alignItems: 'center',
    flexDirection: 'row',
    height: scale(90),
  },
  title: {
    fontFamily: fonts.RobotoFontBold,
    fontSize: scale(15),
    marginBottom: scale(5),
  },
});
