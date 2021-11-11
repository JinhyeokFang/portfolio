// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDLT3zyzOp2IcG1_7f6IL1HusEMkVPMiBE",
  authDomain: "jinhyeokfang-xyz-c5eba.firebaseapp.com",
  projectId: "jinhyeokfang-xyz-c5eba",
  storageBucket: "jinhyeokfang-xyz-c5eba.appspot.com",
  messagingSenderId: "778698377066",
  appId: "1:778698377066:web:fbcdd6a9b9a9c159670713",
  measurementId: "G-MLY8K6YLN0"
};

const app = initializeApp(firebaseConfig);

export default getAnalytics(app);