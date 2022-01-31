import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import Image from 'react-native-fast-image';
import {fonts} from '../../assets';

import {theme} from '../../assets/theme/colors';
import {useDBContext} from '../../context/DBContext';

const windowHeight = Dimensions.get('window').height;

export const Library: React.FC = () => {
  const {broadcasts} = useDBContext();

  return (
    <View style={{flex: 1, paddingVertical: 15, backgroundColor: '#2f2f2f'}}>
      <ScrollView style={{flex: 1}}>
        {broadcasts.map(item => (
          <View
            key={item.feedUrl}
            style={{
              backgroundColor: '#568562',
              marginVertical: 10,
              height: windowHeight / 7,
              justifyContent: 'space-around',
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: theme.colorWhite,
                fontFamily: fonts.RobotoFontBold,
                fontSize: 18,
                marginLeft: 15,
              }}>
              {item.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.05}} />

              <Image
                source={{uri: item.thumbnail}}
                style={{height: (windowHeight / 8) * 0.7, flex: 0.5}}
              />
              <View style={{flex: 0.05}} />
              <View style={{flex: 1.5, justifyContent: 'space-around'}}>
                <Text
                  style={{
                    color: theme.colorWhite,
                    fontFamily: fonts.RobotoFontRegular,
                    fontSize: 15,
                  }}>
                  {item.artist}
                </Text>
                <Text
                  style={{
                    color: theme.colorWhite,
                    fontFamily: fonts.RobotoFontBold,
                    fontSize: 15,
                  }}>
                  sponsored by:
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    color: theme.colorWhite,
                    fontFamily: fonts.RobotoFontRegular,
                    fontSize: 15,
                  }}>
                  {item.feedUrl}
                </Text>
              </View>
              <View style={{flex: 0.05}} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
