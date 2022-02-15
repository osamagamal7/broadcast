import SQLite from 'react-native-sqlite-storage';
import {IDatabaseContract} from '../contracts/DatabaseContract';
import {BroadcastModel} from '../models/BroadcastModel';

export class SQLiteServices implements IDatabaseContract {
  _db: SQLite.SQLiteDatabase;

  constructor() {
    this._db = SQLite.openDatabase(
      {name: 'broadcasts.db', location: 'default'},
      () => {
        this.init();
      },
      err => {
        console.log('sQlite database error', err);
      },
    );
  }

  async init() {
    await this._db.executeSql(`
      CREATE TABLE IF NOT EXISTS broadcasts (
        name VARCHAR(255) UNIQUE,
        episodes_count INT DEFAULT 0,
        feed_url TEXT,
        artist TEXT,
        thumbnail TEXT
      );
    `);
  }

  getAllBroadCasts(): Promise<BroadcastModel[]> {
    const broadcast: BroadcastModel[] = [];

    return new Promise((resolve, reject) => {
      this._db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM broadcasts ORDER BY name;',
          [],
          (_, results) => {
            for (let i = 0; i < results.rows.length; i++) {
              const row = results.rows.item(i);

              broadcast.push(
                new BroadcastModel({
                  name: row.name,
                  thumbnail: row.thumbnail,
                  artist: row.artist,
                  episodesCount: row.episodes_count,
                  feedUrl: row.feed_url,
                }),
              );
            }
            resolve(broadcast);
          },
          (_, err) => {
            reject(err);
          },
        );
      });
    });
  }

  subscribeToBroadCast(broadcastModel: BroadcastModel): Promise<void> {
    return new Promise((resolve, reject) => {
      this._db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO broadcasts (artist, episodes_count, feed_url, name, thumbnail) VALUES (?,?,?,?,?)',
          [
            broadcastModel.artist,
            broadcastModel.episodesCount,
            broadcastModel.feedUrl,
            broadcastModel.name,
            broadcastModel.thumbnail,
          ],
          () => {
            resolve();
          },
          (_, err) => {
            reject(err);
          },
        );
      });
    });
  }

  deleteBroadcast(broadcastModel: BroadcastModel): Promise<void> {
    return new Promise((resolve, reject) => {
      this._db.transaction(tx => {
        tx.executeSql(
          `DELETE FROM broadcasts WHERE name="${broadcastModel.name}"`,
          [],
          () => {
            resolve();
          },
          (_, err) => {
            console.log('error deleting a broadcast', err);
            reject(err);
          },
        );
      });
    });
  }
}
