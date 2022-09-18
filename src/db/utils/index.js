export const dbQuery = (db, query, args) => {
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
