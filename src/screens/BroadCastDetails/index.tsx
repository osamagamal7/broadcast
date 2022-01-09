import {useQuery} from '@apollo/client';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import {getReadableDuration, getWeekDay} from '../../../lib/dateTimeHelpers';

import {theme} from '../../assets/theme/colors';
import feedQuery from '../../graphql/query/feedQuery';
import {FeedQuery, FeedQueryVariables} from '../../types/graphql';
import {SearchStackParamList} from '../../types/Navigation';
import {styles} from './styles';

type DetailScreenProp = RouteProp<SearchStackParamList, 'BroadCastDetails'>;

export const BroadCastDetails: React.FC = () => {
  const {item} = useRoute<DetailScreenProp>().params;

  const {data, loading, error} = useQuery<FeedQuery, FeedQueryVariables>(
    feedQuery,
    {
      variables: {
        feedUrl: item.feedUrl,
      },
    },
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={data?.feed || []}
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
            <View
              style={{
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1.7,
                  alignItems: 'center',
                }}>
                <Icon name="play" color={theme.colorBlueLight} size={35} />
              </View>

              <View style={{flex: 8.3}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Play</Text>
                <Text style={{fontSize: 16, opacity: 0.7}}>
                  {data?.feed[0].title}
                </Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Episodes</Text>
            </View>

            {loading && (
              <ActivityIndicator size="large" color={theme.colorBlueLight} />
            )}
          </View>
        )}
        renderItem={({item}) => (
          <View style={{padding: 20}}>
            <Text style={{opacity: 0.7}}>
              {getWeekDay(new Date(item.pubDate))}
            </Text>
            <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
            <Text numberOfLines={2} style={{opacity: 0.4}}>
              {item.description}
            </Text>
            <Text style={{opacity: 0.4}}>
              {getReadableDuration(item.duration)}
            </Text>
          </View>
        )}
        keyExtractor={item => item.linkUrl}
      />
    </View>
  );
};
