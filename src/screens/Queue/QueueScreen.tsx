import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import TrackPlayer, {Track} from 'react-native-track-player';

import {theme} from '../../assets/theme/colors';
import {fonts} from '../../assets';
import {usePlayerContext} from '../../context/PlayerProvider';
import {PodcastItem} from '../../components/PodcastItem';

const windowHeight = Dimensions.get('window').height;

export const QueueScreen: React.FC = () => {
  const [queue, setQueue] = React.useState<Track[]>([]);
  const {goBack} = useNavigation();
  const {play} = usePlayerContext();

  const getQueue = async () => {
    const tracks = await TrackPlayer.getQueue();
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
              <PodcastItem
                image={String(track.artwork)}
                mainTitle={track.title!}
                title={track.artist!}
                height={windowHeight / 8}
              />
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
});
