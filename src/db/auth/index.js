import * as SQLite from "expo-sqlite";
import { dbQuery } from "../utils";

const db = SQLite.openDatabase("sn-app-auth.db");

export const initAuthDb = () =>
  dbQuery(
    db,
    "CREATE TABLE IF NOT EXISTS auth (id INTEGER PRIMARY KEY NOT NULL, refreshToken TEXT NOT NULL, uid TEXT DEFAULT NULL, displayName TEXT DEFAULT NULL, profilePhoto TEXT DEFAULT NULL)"
  );

export const dropAuthDb = () => dbQuery(db, "DROP TABLE auth");

export const saveRefreshTokenOnAuthDb = (refreshToken) =>
  dbQuery(db, "INSERT INTO auth (refreshToken) VALUES (?)", [refreshToken]);

export const getLastRefreshTokenFromAuthDb = () =>
  dbQuery(db, "SELECT refreshToken FROM auth WHERE id = LAST_INSERT_ROWID()");

export const getAllRowsFromAuthDb = () => dbQuery(db, "SELECT * FROM auth");

// export const deleteIdTokenFromAuthDb = () =>
//   dbQuery(db, "DELETE FROM auth WHERE id = 1");
