import * as SQLite from "expo-sqlite";

export const dbQuery = (query, args) => {
  return new Promise((resolve, reject) =>
    db.transaction((tx) =>
      tx.executeSql(
        query,
        args,
        (_, res) => resolve(res),
        (_, err) => reject(err)
      )
    )
  );
};
