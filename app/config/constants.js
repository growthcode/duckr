import firebase from 'firebase'

const config = {
  // apiKey: "FAKEKEYFAKEKEY",
  // authDomain: "duckr.firebaseapp.com",
  // databaseURL: "https://duckr.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
