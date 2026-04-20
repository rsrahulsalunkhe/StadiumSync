import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getMessaging, isSupported } from 'firebase/messaging';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBMWESt76Nvgy22V52nC61SwC114SdT0jY",
  authDomain: "stadiumsync-8baea.firebaseapp.com",
  projectId: "stadiumsync-8baea",
  storageBucket: "stadiumsync-8baea.firebasestorage.app",
  messagingSenderId: "479543376874",
  appId: "1:479543376874:web:dcab0aca9c3b6b24285093",
  measurementId: "G-NNPR870CWK"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Safe messaging export — FCM is not supported in all browsers
// Wrap in isSupported() check to avoid crashes in Safari/Firefox
export const getMessagingInstance = async () => {
  const supported = await isSupported();
  if (!supported) return null;
  return getMessaging(app);
};


/*
Go to Firebase Console → Firestore → Rules and set:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
    match /crowd_zones/{doc} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    match /queues/{doc} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    match /tasks/{doc} {
      allow read, write: if request.auth != null;
    }
    match /alerts/{doc} {
      allow read, write: if request.auth != null;
    }
    match /incidents/{doc} {
      allow read, write: if request.auth != null;
    }
  }
}
*/
