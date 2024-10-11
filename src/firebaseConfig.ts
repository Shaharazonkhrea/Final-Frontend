import { initializeApp } from "firebase/app"
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider
} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB7e6a5Oh4QJpPjU9dX82kQfw7t7fYN2M8",
    authDomain: "bite-finder.firebaseapp.com",
    projectId: "bite-finder",
    storageBucket: "bite-finder.appspot.com",
    messagingSenderId: "842678019569",
    appId: "1:842678019569:web:28cf403cffab554fa59050"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const authProvider = new GoogleAuthProvider()

export function signInWithGoogle(): void {
	signInWithPopup(auth, authProvider)
}

export function signOut(): void {
	auth.signOut()
}