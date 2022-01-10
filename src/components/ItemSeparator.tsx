import React from 'react';
import {StyleSheet, View} from 'react-native';
export const ItemSeparator: React.FC = () => {
  return (
    <View
      style={{
        height: StyleSheet.hairlineWidth,
        width: '100%',
        backgroundColor: '#000',
      }}
    />
  );
};
