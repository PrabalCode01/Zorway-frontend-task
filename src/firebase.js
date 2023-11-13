import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAMgInuGqnTj9PrZjHx3zdZL_YNCrNI9JM",
  authDomain: "fir-auth-3bc19.firebaseapp.com",
  projectId: "fir-auth-3bc19",
  storageBucket: "fir-auth-3bc19.appspot.com",
  messagingSenderId: "503168349241",
  appId: "1:503168349241:web:505149357cbbc8bf4c89e8",
  measurementId: "G-0K7C9W0LTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();


const database = getAuth(app);


export { database,app, auth};

