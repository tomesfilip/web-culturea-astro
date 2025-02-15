import { getApp, getApps, initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: 'culturea-464e2.firebaseapp.com',
  projectId: 'culturea-464e2',
  storageBucket: 'culturea-464e2.appspot.com',
  messagingSenderId: '513140761584',
  appId: '1:513140761584:web:e366e8755ea9d82bcc3335',
  measurementId: 'G-0B8T16LHMB',
};

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const blogCollectionRef = collection(db, 'blogs');

// async function loadBrowserServices() {
//   if (typeof window !== 'undefined') {
//     const { getAnalytics } = await import('firebase/analytics');

//     return {
//       analytics: getAnalytics(firebaseApp),
//     };
//   }
//   return { analytics: null };
// }

// // Export Firebase browser services (will be null on the server)
// export const { analytics } = await loadBrowserServices();
