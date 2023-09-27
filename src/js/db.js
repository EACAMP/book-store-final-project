const firebaseConfig = {
  apiKey: "AIzaSyBEFmlM2bpDLAPervHYF6hV3g1b6vSsGCw",
  authDomain: "book-store-eacamp.firebaseapp.com",
  databaseURL: "https://book-store-eacamp-default-rtdb.firebaseio.com",
  projectId: "book-store-eacamp",
  storageBucket: "book-store-eacamp.appspot.com",
  messagingSenderId: "329171931830",
  appId: "1:329171931830:web:1a06a12d8204b7c5010c17",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.database();
