import React, {createContext, useCallback, useContext} from 'react';
import TrackPlayer, {
  Track,
  State as TrackPlayerState,
} from 'react-native-track-player';

type ContextProviderType = {
  children: React.ReactNode;
};

type PlayerContextType = {
  isPlaying: boolean;
  isPaused: boolean;
  isStopped: boolean;
  isEmpty: boolean;
  currentTrack: Track | null;
  play: (track?: Track) => void;
  pause: () => void;
};

export const PlayerContext = React.createContext<PlayerContextType>(
  {} as PlayerContextType,
);

export const PlayerProvider: React.FC<ContextProviderType> = ({children}) => {
  const [currentTrack, setCurrentTrack] = React.useState<null | Track>(null);
  const [playerState, setPlayerState] = React.useState<null | TrackPlayerState>(
    null,
  );

  React.useEffect(() => {
    const listener = TrackPlayer.addEventListener(
      'playback-state',
      ({state}: {state: TrackPlayerState}) => {
        setPlayerState(() => state);
      },
    );
    return () => {
      listener.remove();
    };
  }, [playerState]);

  //when we first play the track it'll pass a new track, but when we toggle between pause and play,
  //  it's still the currentTrack and we won't pass a new track, so the first condition won't run.
  const play = useCallback(
    async (track?: Track) => {
      if (!track) {
        if (currentTrack) {
          await TrackPlayer.play();
        }
        return;
      }

      await TrackPlayer.add([track]);
      setCurrentTrack(() => track);
      await TrackPlayer.play();
    },
    [currentTrack],
  );

  const pause = useCallback(async () => {
    await TrackPlayer.pause();
  }, []);

  //the passed down value has the trackPlayer state as the current played track and 2 func (pause,play)
  const value: PlayerContextType = {
    isPlaying: playerState === TrackPlayerState.Playing,
    isPaused: playerState === TrackPlayerState.Paused,
    isStopped: playerState === TrackPlayerState.Stopped,
    isEmpty: playerState === null,
    currentTrack,
    pause,
    play,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
