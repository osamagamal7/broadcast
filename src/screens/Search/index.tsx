import React from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import {scale} from 'react-native-size-matters';

import {styles} from './styles';
import {theme} from '../../assets/theme/colors';

export const Search: React.FC = () => {
  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search Broadcast"
            style={styles.input}
            selectionColor={theme.colorBlueLight}
          />
        </View>
        <FlatList
          data={[{id: 1}, {id: 2}]}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.detailContainer}>
              <View style={styles.img} />
              <View>
                <Text>Joe Rogan</Text>
                <Text>subtitle</Text>
                <Text>400 Ppl</Text>
              </View>
            </View>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
