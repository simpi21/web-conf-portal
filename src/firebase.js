import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCaROHoS5XLLASC_ssvcTIO8Ye3R6N3Lis",
    authDomain: "web-conf-portal.firebaseapp.com",
    databaseURL: "https://web-conf-portal.firebaseio.com",
    projectId: "web-conf-portal",
    storageBucket: "web-conf-portal.appspot.com",
    messagingSenderId: "299032672856",
    appId: "1:299032672856:web:df7bca4c3c77cb5b73a82d",
    measurementId: "G-QH6BLR51CC"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
    db,
    auth,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}