import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import config from "../config";

const {
  firebase: { enabled, apiKey, authDomain, projectId },
} = config;

const clientCredentials = {
  apiKey,
  authDomain,
  projectId,
};

let firebaseApp;
let analytics;

if (firebase.apps.length) {
  firebaseApp = firebase.apps[0];
} else {
  if (enabled) {
    firebaseApp = firebase.initializeApp(clientCredentials);
  }
}

export default firebaseApp;
export { firebaseApp, firebase, analytics, clientCredentials };
