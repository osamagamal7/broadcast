import {scale, ScaledSheet} from 'react-native-size-matters';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import Image from 'react-native-fast-image';

import Icon from 'react-native-vector-icons/Feather';
import {theme} from '../assets/theme/colors';
import {usePlayerContext} from '../context/PlayerProvider';
import {fonts} from '../assets';

const windowHeight = Dimensions.get('window').height;

export const MiniPlayer = () => {
  const playerContext = usePlayerContext();

  if (playerContext.isEmpty || !playerContext.currentTrack) {
    return null;
  }

  return (
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
          {playerContext.isPaused && (
            <TouchableOpacity onPress={() => playerContext.play()}>
              <Icon name="play" size={(windowHeight / 11) * 0.45} />
            </TouchableOpacity>
          )}

          {playerContext.isPlaying && (
            <TouchableOpacity onPress={playerContext.pause}>
              <Icon name="pause" size={(windowHeight / 11) * 0.45} />
            </TouchableOpacity>
          )}

          {playerContext.isStopped && (
            <TouchableOpacity onPress={() => null}>
              <Icon name="square" size={(windowHeight / 11) * 0.45} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
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
