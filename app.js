alert("App JS Working");

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

alert("Firebase Connected Successfully");

// Product Grid
const productGrid = document.querySelector(".product-grid");

// Load Products
async function loadProducts() {

  try {

    const querySnapshot = await getDocs(collection(db, "Product"));

    productGrid.innerHTML = "";

    querySnapshot.forEach((doc) => {

      const product = doc.data();

      productGrid.innerHTML += `

        <div class="product-card">

          <img src="${product.Image}" alt="Product Image" />

          <h3>${product.Name}</h3>

          <p>Rs. ${product.Price}</p>

          <button>Add to Cart</button>

        </div>

      `;

    });

  } catch (error) {

    console.log(error);

    alert(error);

  }

}

// Call Function
loadProducts();
