import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {scale} from 'react-native-size-matters';

import {fonts} from '../../assets';
import {theme} from '../../assets/theme/colors';
import {PodcastItem} from '../../components/PodcastItem';
import {useDBContext} from '../../context/DBContext';

export const Library: React.FC = () => {
  const {broadcasts} = useDBContext();

  if (broadcasts.length === 0) {
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
          No Podcasts Added to the Subscription List Yet!
        </Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, paddingVertical: 15, backgroundColor: '#2f2f2f'}}>
      <ScrollView style={{flex: 1}}>
        {broadcasts.map(item => (
          <View
            style={{marginVertical: 5}}
            key={item.feedUrl + String(Math.floor(Math.random() * 1000))}>
            <PodcastItem
              image={item.thumbnail}
              mainTitle={item.artist}
              title="Sponsored By:"
              subTitle={item.feedUrl}
              backgroundColor="#331b1b"
              textColor="#fff"
              font={fonts.RobotoFontRegular}
              fontSize={scale(14)}
              headerLine={item.name}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
