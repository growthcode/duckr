import firebase from 'firebase'
import { firebaseConfig } from '../../env.js'

firebase.initializeApp(firebaseConfig)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
