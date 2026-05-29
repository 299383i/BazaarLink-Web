import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBw8XilZ9Thac7Og9_nD6z5A7BTYnaBhOI",
  authDomain: "bazaarlink-8381e.firebaseapp.com",
  projectId: "bazaarlink-8381e",
  storageBucket: "bazaarlink-8381e.firebasestorage.app",
  messagingSenderId: "448120173557",
  appId: "1:448120173557:web:4d579dc9292ea322c2a6bc",
  measurementId: "G-ZNTJNF53WB"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.addProduct = async function () {

  const name = document.getElementById("name").value;

  const price = document.getElementById("price").value;

  const image = document.getElementById("image").value;

  try {

    await addDoc(collection(db, "Product"), {

      Name: name,
      Price: price,
      Image: image

    });

    alert("Product Added Successfully");

  } catch (error) {

    alert(error);

  }

}
