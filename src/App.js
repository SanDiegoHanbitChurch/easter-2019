import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import * as firebase from "firebase";
import * as uuid from "uuid";

import Add from "./prayerRequests/add";
import List from "./prayerRequests/list";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "hanbit-mobile.firebaseapp.com",
  databaseURL: "https://hanbit-mobile.firebaseio.com",
  projectId: "hanbit-mobile",
  storageBucket: "hanbit-mobile.appspot.com",
  messagingSenderId: "403640880033"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
const database = firebaseApp.database();
const prayRequestsRef = database.ref("prayerRequests");
const prayerRequests = [];

prayRequestsRef.on("child_added", data => {
  console.log("data", {
    key: data.key,
    initial: data.val().initial,
    topic: data.val().topic
  });
  prayerRequests.push({
    key: data.key,
    initial: data.val().initial,
    topic: data.val().topic
  });

  console.log("prayerRequests", prayerRequests.length);
});
/* 
var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});
*/

const onSubmit = ({ topic, initial }) => {
  const newPrayerRequestRef = prayRequestsRef.push();
  newPrayerRequestRef.set({
    topic,
    initial,
    addedAt: new Date().getTime()
  });
};

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/add/">Add Prayer Request</Link>
          </li>
          <li>
            <Link to="/list/">List Prayer Requests</Link>
          </li>
        </ul>
      </nav>

      {/* <Route path="/" exact component={Index} /> */}
      <Route path="/add/" render={() => <Add onSubmit={onSubmit} />} />
      <Route
        path="/list/"
        render={() => <List prayerRequests={prayerRequests} />}
      />
    </div>
  </Router>
);

export default App;
