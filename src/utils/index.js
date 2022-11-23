import * as SecureStore from "expo-secure-store";

export const saveOnSecureStore = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

export const getFromSecureStore = async (key) => {
  const result = await SecureStore.getItemAsync(key);
  return result;
};

export const deleteFromSecureStore = async (key) => {
  await SecureStore.deleteItemAsync(key);
};
