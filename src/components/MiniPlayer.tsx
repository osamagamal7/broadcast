import {scale, ScaledSheet} from 'react-native-size-matters';
import React from 'react';
import {Pressable, View, Text, Dimensions} from 'react-native';
import Image from 'react-native-fast-image';

import Icon from 'react-native-vector-icons/Feather';
import {theme} from '../assets/theme/colors';
import {usePlayerContext} from '../context/PlayerProvider';
import {fonts} from '../assets';
import {useNavigation} from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;

export const MiniPlayer = () => {
  const playerContext = usePlayerContext();
  const {navigate} = useNavigation();

  if (playerContext.isEmpty || !playerContext.currentTrack) {
    return null;
  }

  return (
    <Pressable onPress={() => navigate('Player')}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            source={{uri: playerContext.currentTrack.artwork}}
            style={styles.img}
          />
          <View style={styles.textContainer}>
            <Text style={styles.txt} numberOfLines={1}>
              {playerContext.currentTrack.title}
            </Text>
          </View>
          <View>
            {playerContext.isPaused ? (
              <Pressable onPress={() => playerContext.play()}>
                <Icon name="play" size={(windowHeight / 11) * 0.45} />
              </Pressable>
            ) : (
              <Pressable onPress={playerContext.pause}>
                <Icon name="pause" size={(windowHeight / 11) * 0.45} />
              </Pressable>
            )}
          </View>

          <Pressable
            onPress={() => playerContext.seekTo(30)}
            style={styles.seekForward}>
            <Icon name="rotate-cw" size={(windowHeight / 11) * 0.45} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: theme.colorGreyLight,
    height: windowHeight / 11,
    backgroundColor: theme.colorWhite,
  },
  img: {
    height: '75%',
    width: (windowHeight / 11) * 0.75,
    borderRadius: 10,
    marginRight: scale(5),
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: scale(8),
  },
  seekForward: {
    marginLeft: scale(5),
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  txt: {
    // alignSelf: 'center',
    fontFamily: fonts.RobotoFontRegular,
    fontSize: scale(14),
    marginRight: scale(5),
  },
});
