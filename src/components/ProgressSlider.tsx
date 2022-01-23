import React from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';

import {theme} from '../assets/theme/colors';
import {useProgress} from 'react-native-track-player';
import {usePlayerContext} from '../context/PlayerProvider';

export const ProgressSlider: React.FC = () => {
  const {position, duration} = useProgress();
  const playerContext = usePlayerContext();

  return (
    <View>
      <Slider
        style={{width: '100%', height: 40}}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor={theme.colorBlueLight}
        maximumTrackTintColor={`${theme.colorBlueLight}50`}
        value={position}
        onSlidingComplete={val => playerContext.goTo(val)}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>{new Date(position * 1000).toISOString().substr(14, 5)}</Text>
        <Text>
          {new Date((duration - position) * 1000).toISOString().substr(14, 5)}
        </Text>
      </View>
    </View>
  );
};
