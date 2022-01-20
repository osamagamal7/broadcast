import {BroadcastModel} from '../models/BroadcastModel';

export interface IDatabaseContract {
  getAllBroadCasts(): Promise<BroadcastModel[]>;
  subscribeToBroadCast(broadcastModel: BroadcastModel): Promise<void>;
  isReady: boolean;
}
