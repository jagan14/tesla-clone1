import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC450epwxyDKiYchKQVpzr0ZkexJ_YZesw",
    authDomain: "tesla-clone-449bc.firebaseapp.com",
    projectId: "tesla-clone-449bc",
    storageBucket: "tesla-clone-449bc.appspot.com",
    messagingSenderId: "461451816220",
    appId: "1:461451816220:web:1bdcae9719828ff1029ed9",
    measurementId: "G-VL5L9GYQG4"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }