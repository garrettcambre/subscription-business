import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBohOusl4XbLjR4E-0YauGbhaJeXXgW5Y4",
  authDomain: "feisty-tempest-199515.firebaseapp.com",
  databaseURL: "https://feisty-tempest-199515.firebaseio.com",
  projectId: "feisty-tempest-199515",
  storageBucket: "feisty-tempest-199515.appspot.com",
  messagingSenderId: "451790528783"
};
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


export {firebase};
