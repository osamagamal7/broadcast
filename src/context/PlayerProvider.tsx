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
  play: (track?: Track, index?: number) => void;
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

  const play = useCallback(
    async (track?: Track, index?: number) => {
      if (!track) {
        if (currentTrack) {
          await TrackPlayer.play();
        }
        return;
      }

      if (currentTrack && track.id === currentTrack.id) {
        await TrackPlayer.play();
        return;
      }

      //when a track in queue gets played
      if (index && index >= 0) {
        try {
          await TrackPlayer.getTrack(index);
          await TrackPlayer.skip(index);
          // TrackPlayer.play();
          setCurrentTrack(track);
        } catch (error) {
          console.log('eeerr', error);
        } finally {
          return;
        }
      }

      //add new track
      if (currentTrack && track.id !== currentTrack.id) {
        await TrackPlayer.add([track]);
        //get all queue and find index of the the new track
        const q = await TrackPlayer.getQueue();

        await TrackPlayer.skip(q.findIndex(qTracks => qTracks.id === track.id));
        TrackPlayer.play();
        setCurrentTrack(track);
        return;
      }

      //first track played
      await TrackPlayer.add([track]);
      await TrackPlayer.play();

      setCurrentTrack(track);
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
