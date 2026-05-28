console.log("BazaarLink Running");
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);
</script>
