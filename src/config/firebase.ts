import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: 'culturea-464e2.firebaseapp.com',
  projectId: 'culturea-464e2',
  storageBucket: 'culturea-464e2.appspot.com',
  messagingSenderId: '513140761584',
  appId: '1:513140761584:web:e366e8755ea9d82bcc3335',
  measurementId: 'G-0B8T16LHMB',
});

export const db = getFirestore(firebaseApp);
export const blogCollectionRef = collection(db, 'blogs');

async function loadBrowserServices() {
  if (typeof window !== 'undefined') {
    const { getAnalytics } = await import('firebase/analytics');
    const { getAuth } = await import('firebase/auth');
    const { getStorage } = await import('firebase/storage');

    return {
      analytics: getAnalytics(firebaseApp),
      auth: getAuth(firebaseApp),
      storage: getStorage(firebaseApp),
    };
  }
  return { analytics: null, auth: null, storage: null };
}

// Export Firebase browser services (will be null on the server)
export const { analytics, auth, storage } = await loadBrowserServices();
