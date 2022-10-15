//const firebase = require("firebase-admin");
import { initializeApp } from "firebase-admin/app";
//import firebase from 'firebase-admin';
const credentials = require("./firebase-config.json");

initializeApp({
    credential: firebase.credential.cert(credentials),
    // databaseURL: "https://<yourproject>.firebaseio.com",
});

//module.exports = firebase;