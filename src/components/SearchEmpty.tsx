import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const SearchEmpty = () => {
  return (
    <View style={styles.container}>
      <Text>No Podcasts, please search something...</Text>
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
