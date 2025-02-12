import { getDocs } from 'firebase/firestore';
import type { TBlogItem } from '../lib/types/TBlogItem';
import { blogCollectionRef } from '../config/firebase';

export const getCollection = async (): Promise<TBlogItem[]> => {
  try {
    const querySnapshot = await getDocs(blogCollectionRef);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as TBlogItem[];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};
