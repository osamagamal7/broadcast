import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import {Input} from 'react-native-elements';
import {theme} from '../../assets/theme/colors';

export const Search: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search Broadcast"
          style={styles.input}
          selectionColor={theme.colorBlueLight}
        />
      </View>
    </View>
  );
};
