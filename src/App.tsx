import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider} from '@apollo/client';

import {AppNavContainer} from './navigations';
import {client} from './graphql/client';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AppNavContainer />
    </ApolloProvider>
  );
};
