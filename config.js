import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-F0QA0nEwJAeesHV5pAQrb2NoC6OLVaU",
  authDomain: "expo-project-8a042.firebaseapp.com",
  projectId: "expo-project-8a042",
  storageBucket: "expo-project-8a042.appspot.com",
  messagingSenderId: "186826109492",
  appId: "1:186826109492:web:14a9a354e6c39369949061"
};

if (!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}