import {useQuery} from '@apollo/client';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, FlatList, Text} from 'react-native';

import {DetailsHeaderList} from '../../components/DetailsHeaderList';
import {ItemDetailsTile} from '../../components/ItemDetailsTile';
import {ItemSeparator} from '../../components/ItemSeparator';
import feedQuery from '../../graphql/query/feedQuery';
import {FeedQuery, FeedQueryVariables} from '../../types/graphql';
import {BroadcastStackParamList} from '../../types/Navigation';
import {styles} from './styles';

type DetailScreenProp = RouteProp<BroadcastStackParamList, 'BroadCastDetails'>;

export const BroadCastDetails: React.FC = () => {
  const {selectedItem} = useRoute<DetailScreenProp>().params;

  const {data, loading, error} = useQuery<FeedQuery, FeedQueryVariables>(
    feedQuery,
    {
      variables: {
        feedUrl: selectedItem.feedUrl,
      },
    },
  );

  return (
    <View style={styles.container}>
      {error ? (
        <View style={styles.centered}>
          <Text>Something Went Wrong Please Try Again!</Text>
        </View>
      ) : (
        <FlatList
          style={styles.listContainer}
          data={data?.feed || []}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={
            <DetailsHeaderList
              feedData={data?.feed[0]!}
              selectedItem={selectedItem}
              loading={loading}
            />
          }
          renderItem={({item}) => (
            <ItemDetailsTile item={item} selectedItem={selectedItem} />
          )}
          keyExtractor={item => {
            return (
              String(item.linkUrl) + String(Math.floor(Math.random() * 1000))
            );
          }}
        />
      )}
    </View>
  );
};
