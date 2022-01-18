import {useQuery} from '@apollo/client';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, FlatList} from 'react-native';

import {DetailsHeaderList} from '../../components/DetailsHeaderList';
import {ItemDetailsTile} from '../../components/ItemDetailsTile';
import {ItemSeparator} from '../../components/ItemSeparator';
import feedQuery from '../../graphql/query/feedQuery';
import {FeedQuery, FeedQueryVariables} from '../../types/graphql';
import {
  SearchStackParamList,
  BroadcastStackParamList,
} from '../../types/Navigation';
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
        keyExtractor={item => item.linkUrl}
      />
    </View>
  );
};
