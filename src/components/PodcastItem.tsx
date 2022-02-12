import React from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';

import {fonts} from '../assets';
import {theme} from '../assets/theme/colors';

const windowHeight = Dimensions.get('window').height;

type PodcastItemType = {
  backgroundColor?: string;
  font?: string;
  fontSize?: number;
  subTitle?: string;
  height?: number;
  textColor?: string;
  headerLine?: string;
  key?: string;
  episodeCount?: number;
  onPress?: () => void;
  onRemoveTrack?: () => void;
  borderRadius?: number;
  image: string;
  mainTitle: string;
  title: string;
  removeFavTrack?: boolean;
};

export const PodcastItem: React.FC<PodcastItemType> = ({
  backgroundColor = theme.colorWhite,
  font = fonts.RobotoFontRegular,
  fontSize = scale(13),
  image,
  mainTitle,
  title,
  subTitle,
  headerLine,
  key,
  height = windowHeight / 7,
  textColor = theme.colorBlack,
  episodeCount,
  borderRadius = scale(8),
  onPress,
  onRemoveTrack,
}) => {
  return (
    <View
      key={key}
      style={{
        backgroundColor: backgroundColor,
        height: height,
        justifyContent: 'space-around',
      }}
      testID="podcastItem">
      {headerLine && (
        <Text
          numberOfLines={1}
          style={{
            color: theme.colorWhite,
            fontFamily: fonts.RobotoFontBold,
            fontSize: scale(18),
            marginLeft: scale(10),
          }}>
          {headerLine}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          height: height * 0.7,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 0.05}} />

        <Image
          source={{uri: image}}
          style={{
            height: '100%',
            flex: 0.5,
            borderRadius: borderRadius,
          }}
        />
        <View style={{flex: 0.05}} />

        <View
          style={{
            flex: 1.5,
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: textColor,
              fontFamily: font,
              fontSize: fontSize,
            }}>
            {mainTitle}
          </Text>
          <Text
            style={{
              color: textColor,
              fontFamily: font,
              fontSize: fontSize,
              marginVertical: scale(4),
            }}>
            {title}
          </Text>
          {subTitle && (
            <Text
              numberOfLines={1}
              style={{
                color: textColor,
                fontFamily: font,
                fontSize: fontSize,
              }}>
              {subTitle}
            </Text>
          )}
          {episodeCount && (
            <Pressable onPress={onPress}>
              <Text
                style={{
                  color: theme.colorBlueLight,
                  fontFamily: fonts.RobotoFontRegular,
                  fontSize: scale(14),
                }}
                testID="pisodecount">
                {episodeCount} episodes
              </Text>
            </Pressable>
          )}
        </View>
        {onRemoveTrack && (
          <Pressable
            style={{flex: 0.3, alignItems: 'center'}}
            onPress={onRemoveTrack}>
            <Icon
              name="delete"
              size={height * 0.3}
              color={theme.colorBlueLight}
              testID="removePodcast"
            />
          </Pressable>
        )}
        <View style={{flex: 0.05}} />
      </View>
    </View>
  );
};
