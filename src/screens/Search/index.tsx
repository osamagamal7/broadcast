import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useLazyQuery} from '@apollo/client';
import {Input} from 'react-native-elements';

import {styles} from './styles';
import {theme} from '../../assets/theme/colors';
import {SearchQuery, SearchQueryVariables} from '../../types/graphql';
import {SEARCH_QUERY} from '../../graphql/query/searchQuery';
import {SearchLoadingOrEmpty} from '../../components/SearchLoading';
import {SearchTile} from '../../components/SearchTile';

export const Search: React.FC = () => {
  const [term, setTerm] = useState('');

  const [search, {data, loading, error}] = useLazyQuery<
    SearchQuery,
    SearchQueryVariables
  >(SEARCH_QUERY);

  const onSearch = async () => {
    await search({variables: {term}});
  };

  return (
    <View style={styles.container}>
      <Input
        inputContainerStyle={styles.inputContainer}
        leftIcon={{
          type: 'font-awesome',
          name: 'search',
          color: theme.colorDarkGrey,
          size: scale(20),
        }}
        onChangeText={setTerm}
        onSubmitEditing={onSearch}
        placeholder="Search Broadcast"
        style={styles.input}
        selectionColor={theme.colorBlueLight}
        value={term}
      />
      {error?.message ? (
        <View style={styles.centered}>
          <Text>Something Went Wrong Please Try Again!</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={data?.search ?? []}
          keyboardShouldPersistTaps="never"
          keyExtractor={item => {
            return (
              String(item.feedUrl) + String(Math.floor(Math.random() * 1000))
            );
          }}
          ListHeaderComponent={<>{loading && <SearchLoadingOrEmpty />}</>}
          ListEmptyComponent={
            <>{!loading && <SearchLoadingOrEmpty empty={false} />}</>
          }
          renderItem={({item}) => <SearchTile item={item} />}
        />
      )}
    </View>
  );
};
