import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView, Pressable, Dimensions} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import Image from 'react-native-fast-image';

import {theme} from '../../assets/theme/colors';
import {usePlayerContext} from '../../context/PlayerProvider';
import {fonts} from '../../assets';
import {ProgressSlider} from '../../components/ProgressSlider';
import {hitSlop} from '../../helpers';

const {width} = Dimensions.get('window');
export const PlayerScreen: React.FC = () => {
  const {goBack, navigate} = useNavigation();
  const {
    favoriteTracks,
    currentTrack,
    seekTo,
    play,
    isPaused,
    pause,
    toggleFavorite,
  } = usePlayerContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.btnContainer}>
          <Pressable
            onPress={() => goBack()}
            style={styles.icon}
            hitSlop={hitSlop(20)}>
            <Icon name="chevron-down" size={width / 12} />
          </Pressable>
          <Pressable
            onPress={() => navigate('Queue')}
            style={styles.icon}
            hitSlop={hitSlop(20)}>
            <Icon name="list" size={width / 12} />
          </Pressable>
        </View>
        <View style={styles.imgContainer}>
          <Image source={{uri: currentTrack?.artwork}} style={styles.img} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{currentTrack?.title}</Text>
          <Text style={styles.artist}>{currentTrack?.artist}</Text>
        </View>
        <View style={styles.sliderContainer}>
          <ProgressSlider />
        </View>
        <View style={styles.controllerContainers}>
          <Pressable onPress={() => seekTo(-15)}>
            <Icon name="rotate-ccw" size={width / 11} />
          </Pressable>
          <View style={styles.PlayNPause}>
            {isPaused ? (
              <Pressable onPress={() => play()}>
                <Icon name="play" size={width / 7} />
              </Pressable>
            ) : (
              <Pressable onPress={pause}>
                <Icon name="pause" size={width / 7} />
              </Pressable>
            )}
          </View>
          <View>
            <Pressable onPress={() => seekTo()}>
              <Icon name="rotate-cw" size={width / 11} />
            </Pressable>
          </View>
          <Pressable
            onPress={() => {
              if (currentTrack) {
                toggleFavorite(currentTrack);
              }
            }}
            style={{marginLeft: width / 10}}>
            <HeartIcon
              name={
                favoriteTracks?.find(f => f.id === currentTrack?.id)
                  ? 'heart'
                  : 'heart-o'
              }
              size={width / 11}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  artist: {
    fontFamily: fonts.RobotoFontLight,
    fontSize: scale(13),
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  controllerContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    alignItems: 'center',
    padding: scale(5),
    marginBottom: scale(20),
  },
  innerContainer: {
    flex: 1,
    paddingTop: scale(10),
  },
  img: {
    width: width - scale(20),
    height: width - scale(20),
    borderRadius: 10,
  },
  imgContainer: {
    alignItems: 'center',
    marginBottom: scale(20),
  },
  icon: {
    marginBottom: scale(20),
    paddingHorizontal: scale(10),
  },
  PlayNPause: {
    marginHorizontal: scale(15),
  },
  sliderContainer: {
    paddingHorizontal: scale(10),
  },
  title: {
    fontFamily: fonts.RobotoFontBold,
    marginBottom: scale(5),
    fontSize: scale(15),
    textAlign: 'center',
  },
});
