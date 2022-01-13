import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {ActivityIndicator} from 'react-native';

import {AppNavContainer} from './navigations';
import {client} from './graphql/client';
import {theme} from './assets/theme/colors';
import {PlayerProvider} from './context/PlayerProvider';
import TrackPlayer from 'react-native-track-player';

export const App: React.FC = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false);

  const setup = async () => {
    await TrackPlayer.setupPlayer();
    setIsReady(true);
  };

  React.useEffect(() => {
    setup();
  }, []);

  return (
    <ApolloProvider client={client}>
      {isReady ? (
        <PlayerProvider>
          <AppNavContainer />
        </PlayerProvider>
      ) : (
        <ActivityIndicator
          size="large"
          color={theme.colorBlueLight}
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
        />
      )}
    </ApolloProvider>
  );
};
