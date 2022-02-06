import React, {FC, useCallback, useContext} from 'react';
import {IDatabaseContract} from '../contracts/DatabaseContract';
import {BroadcastModel} from '../models/BroadcastModel';
import {SQLiteServices} from '../utilsAndServices/sqliteServices';

type DBContextProps = {
  broadcasts: BroadcastModel[];
  subToBroadcast: (broadcast: BroadcastModel) => Promise<void>;
  removeBroadcast: (broadcast: BroadcastModel) => Promise<void>;
};

type DBProviderType = {
  children: React.ReactNode;
};

const DBContext = React.createContext<DBContextProps>({} as DBContextProps);

export const DBProvider: FC<DBProviderType> = ({children}) => {
  const [broadcasts, setBroadcasts] = React.useState<BroadcastModel[]>([]);
  const db = React.useRef<IDatabaseContract | null>(null);

  db.current = new SQLiteServices();

  React.useEffect(() => {
    (async () => {
      if (db.current) {
        const _broadcasts = await db.current.getAllBroadCasts();
        setBroadcasts(_broadcasts);
      }
    })();
  }, []);

  const subToBroadcast = useCallback(async (broadcast: BroadcastModel) => {
    if (db.current) {
      await db.current.subscribeToBroadCast(broadcast);
      const _broadcasts = await db.current.getAllBroadCasts();
      setBroadcasts(_broadcasts);
    }
  }, []);

  const removeBroadcast = useCallback(async (broadcast: BroadcastModel) => {
    if (db.current) {
      await db.current.deleteBroadcast(broadcast);
      const _broadcasts = await db.current.getAllBroadCasts();
      setBroadcasts(_broadcasts);
    }
  }, []);

  const value: DBContextProps = {
    broadcasts,
    subToBroadcast,
    removeBroadcast,
  };

  return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
};

export const useDBContext = () => useContext(DBContext);
