import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {fonts} from '../assets';

import {theme} from '../assets/theme/colors';

export const SearchLoadingOrEmpty = ({empty}: {empty?: Boolean}) => {
  if (empty === false) {
    return (
      <View style={styles.container}>
        <Text
          testID="start"
          style={{fontFamily: fonts.RobotoFontRegular, fontSize: 18}}>
          Start Searching For Podcasts To Listen To!
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colorBlueLight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
