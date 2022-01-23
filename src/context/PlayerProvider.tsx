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
  seekTo: (amount?: number) => void;
  pause: () => void;
  goTo: (amount: number) => void;
};

export const PlayerContext = createContext<PlayerContextType>(
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
  //  it's still the currentTrack and we won't pass a new track, so the first condition will run.
  const play = useCallback(
    async (track?: Track) => {
      if (!track) {
        if (currentTrack) {
          await TrackPlayer.play();
        }
        return;
      }
      //playing a new different track than the current one
      if (currentTrack && currentTrack.id !== track.id) {
        await TrackPlayer.reset();
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

  const goTo = useCallback(async amount => {
    await TrackPlayer.seekTo(amount);
  }, []);

  const seekTo = useCallback(async (amount = 30) => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position + amount);
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
    seekTo,
    goTo,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
