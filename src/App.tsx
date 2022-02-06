import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {ActivityIndicator} from 'react-native';
import TrackPlayer, {Capability} from 'react-native-track-player';
import SplashScreen from 'react-native-splash-screen';

import {AppNavContainer} from './navigations';
import {client} from './graphql/client';
import {theme} from './assets/theme/colors';
import {PlayerProvider} from './context/PlayerProvider';
import {DBProvider} from './context/DBContext';

export const App: React.FC = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false);

  const setup = async () => {
    await TrackPlayer.setupPlayer({waitForBuffer: true});
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.JumpBackward,
        Capability.JumpForward,
        Capability.Stop,
      ],
      forwardJumpInterval: 15,
      backwardJumpInterval: 15,
    });

    setIsReady(true);
  };

  React.useEffect(() => {
    setup();
    SplashScreen.hide();
  }, []);

  return (
    <ApolloProvider client={client}>
      {isReady ? (
        <PlayerProvider>
          <DBProvider>
            <AppNavContainer />
          </DBProvider>
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
