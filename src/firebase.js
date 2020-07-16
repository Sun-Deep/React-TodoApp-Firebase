import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    /* FIRE BASE CONFIG CODE HERE FROM FIREBASe  */
})

const db = firebaseApp.firestore()

export { db }
