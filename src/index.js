import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";
import * as uuid from "uuid";
import Index from "./pages/index";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
  apiKey: "AIzaSyD9OIBQUJIXJjHfOkTb4LAnt-THgzIqve4",
  authDomain: "hanbit-mobile.firebaseapp.com",
  databaseURL: "https://hanbit-mobile.firebaseio.com",
  projectId: "hanbit-mobile",
  storageBucket: "hanbit-mobile.appspot.com",
  messagingSenderId: "403640880033"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
var database = firebaseApp.database();

const onSubmit = ({ prayerRequest, initial }) => {
  database.ref("prayerRequests/" + uuid.v4()).set({
    prayerRequest,
    initial,
    addedAt: new Date().getTime()
  });
};

ReactDOM.render(<Index onSubmit={onSubmit} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
