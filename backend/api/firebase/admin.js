import { initializeApp } from "firebase-admin/app";
const credentials = require("./firebase-config.json");

initializeApp({
    credential: firebase.credential.cert(credentials),
});