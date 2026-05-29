import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

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

const auth = getAuth(app);

window.loginUser = async function () {

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  try {

    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful");

    window.location.href = "admin.html";

  } catch (error) {

    alert(error.message);

  }

}
window.loginUser = loginUser;
