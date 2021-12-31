import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {theme} from '../assets/theme/colors';

export const SearchLoading = () => {
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
