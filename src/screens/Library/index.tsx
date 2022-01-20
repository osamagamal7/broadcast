import React from 'react';
import {View, Text} from 'react-native';
import {theme} from '../../assets/theme/colors';
import {useDBContext} from '../../context/DBContext';

export const Library: React.FC = () => {
  const {broadcasts} = useDBContext();
  return (
    <View style={{flex: 1}}>
      {broadcasts.map(item => (
        <View
          key={item.feedUrl}
          style={{
            backgroundColor: theme.colorWhite,
            padding: 20,
            marginVertical: 10,
          }}>
          <Text>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};
