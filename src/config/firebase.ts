import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseApp = initializeApp({
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: 'culturea-464e2.firebaseapp.com',
  projectId: 'culturea-464e2',
  storageBucket: 'culturea-464e2.appspot.com',
  messagingSenderId: '513140761584',
  appId: '1:513140761584:web:e366e8755ea9d82bcc3335',
  measurementId: 'G-0B8T16LHMB',
});

export const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const blogCollectionRef = collection(db, 'blogs');
