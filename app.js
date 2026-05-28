console.log("BazaarLink Running");

// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBw8XilZ9Thac7Og9_nD6z5A7BTYnaBhOI",
  authDomain: "bazaarlink-8381e.firebaseapp.com",
  projectId: "bazaarlink-8381e",
  storageBucket: "bazaarlink-8381e.firebasestorage.app",
  messagingSenderId: "448120173557",
  appId: "1:448120173557:web:4d579dc9292ea322c2a6bc",
  measurementId: "G-ZNTJNF53WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// TEST
alert("Firebase Connected Successfully");

// Load Products
async function loadProducts() {

  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {

    console.log(doc.data());

  });

}

loadProducts();    console.log(doc.data());
  });
}

loadProducts();
alert("Firebase Connected");
// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBw8XilZ9Thac7Og9_nD6z5A7BTYnaBhOI",
  authDomain: "bazaarlink-8381e.firebaseapp.com",
  projectId: "bazaarlink-8381e",
  storageBucket: "bazaarlink-8381e.firebasestorage.app",
  messagingSenderId: "448120173557",
  appId: "1:448120173557:web:4d579dc9292ea322c2a6bc",
  measurementId: "G-ZNTJNF53WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// TEST ALERT
alert("Firebase Connected Successfully");

// Load Products
async function loadProducts() {

  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {

    console.log(doc.data());

  });

}

loadProducts();
