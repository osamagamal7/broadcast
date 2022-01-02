import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Image from 'react-native-fast-image';
import {theme} from '../../assets/theme/colors';

import {SearchStackParamList} from '../../types/Navigation';
import {styles} from './styles';

type DetailScreenProp = RouteProp<SearchStackParamList, 'BroadCastDetails'>;

export const BroadCastDetails: React.FC = () => {
  const {item} = useRoute<DetailScreenProp>().params;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={[{id: '1'}, {id: '2'}, {id: '3'}]}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                width: '100%',
                backgroundColor: '#000',
              }}
            />
          );
        }}
        ListHeaderComponent={() => (
          <View style={styles.listHeaderComponent}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 3}}>
                {item.thumbnail && (
                  <Image source={{uri: item.thumbnail}} style={styles.img} />
                )}
              </View>
              <View style={{flex: 0.5}} />
              <View style={{flex: 6.5}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {item.podcastName}
                </Text>
                <Text style={{opacity: 0.4}}>{item.artist}</Text>
                <Text style={{color: theme.colorBlueLight}}>Subscribed</Text>
              </View>
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 20, opacity: 0.7}}>
                Play Last Episodes
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Episodes</Text>
            </View>
          </View>
        )}
        renderItem={() => (
          <View style={{padding: 20}}>
            <Text style={{opacity: 0.7}}>Friday</Text>
            <Text style={{fontWeight: 'bold'}}>#400 - The Title</Text>
            <Text numberOfLines={2} style={{opacity: 0.4}}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Text>
            <Text style={{opacity: 0.4}}>3hrs. 13min</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
