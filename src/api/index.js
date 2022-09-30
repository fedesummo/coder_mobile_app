import axios from "axios";

const FIREBASE_API_KEY = "AIzaSyAyjqt3ZDNLicPo70K6a9e7x-l03VPf-vo";

// Firebase Authentication
export const axiosSignUp = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
});

export const axiosSignIn = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
});

export const axiosGetUserData = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`,
});

export const axiosIdToken = axios.create({
  baseURL: `https://securetoken.googleapis.com/v1/token?key=${FIREBASE_API_KEY}`,
});

// Firebase Realtime Database
export const axiosPlaces = axios.create({
  baseURL: "https://sn-mobile-8a480-default-rtdb.firebaseio.com/.json"
});

