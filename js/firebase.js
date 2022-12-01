import { initializeApp  } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js"

const firebaseConfig = {
    apiKey: "AIzaSyAMR_B5Yv3JmqEUkrpSRfBaQ8vxjWxlaUo",
    authDomain: "notes-c92ef.firebaseapp.com",
    projectId: "notes-c92ef",
    storageBucket: "notes-c92ef.appspot.com",
    messagingSenderId: "745307182293",
    appId: "1:745307182293:web:5f947fd90b14f2550f7e5c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  export{
    app
  }
