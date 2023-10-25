
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCif0ajYLXlGDXyIwAX3x7zVYsimHC_-wo",
    authDomain: "mandelbrot-set-226c7.firebaseapp.com",
    projectId: "mandelbrot-set-226c7",
    storageBucket: "mandelbrot-set-226c7.appspot.com",
    messagingSenderId: "688049885530",
    appId: "1:688049885530:web:25b7ee306046caf7f6e363",
    measurementId: "G-KXDBH5LTMR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Get references to form elements
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

// Add a listener to the form for when it's submitted
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const email = emailInput.value;
    const password = passwordInput.value;

    // Sign in with Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User successfully signed in
            const user = userCredential.user;
            message.textContent = `Logged in as ${user.email}`;
        })
        .catch((error) => {
            // Handle errors
            message.textContent = `Error: ${error.message}`;
        });
});

