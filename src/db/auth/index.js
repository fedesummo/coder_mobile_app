import * as SQLite from "expo-sqlite";
import { dbQuery } from "../utils";

const db = SQLite.openDatabase("sn-app-auth.db");

export const initAuthDb = () =>
  dbQuery(
    db,
    "CREATE TABLE IF NOT EXISTS auth (id INTEGER PRIMARY KEY NOT NULL, refreshToken TEXT DEFAULT NULL, uid TEXT DEFAULT NULL)"
  );

export const saveRefreshTokenOnAuthDb = (refreshToken) =>
  dbQuery(db, "INSERT INTO auth (refreshToken) VALUES (?)", [refreshToken]);

export const deleteRefreshTokenFromAuthDb = () =>
  dbQuery(
    db,
    "UPDATE auth SET refreshToken = '' WHERE id = LAST_INSERT_ROWID()"
  );

export const getLastRefreshTokenFromAuthDb = () =>
  dbQuery(db, "SELECT refreshToken FROM auth WHERE id = LAST_INSERT_ROWID()");
