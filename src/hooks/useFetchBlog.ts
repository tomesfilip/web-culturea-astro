import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '../config/firebase';
import type { TBlogItem } from '../lib/types/TBlogItem';

export const useFetchBlog = (id: string) => {
  const [data, setData] = useState<TBlogItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const docRef = doc(db, 'blogs', id);
        const snapshot = await getDoc(docRef);

        setData(snapshot.data() as TBlogItem);

        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unexpected error');
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    return () => abortController.abort();
  }, []);

  return { data, isLoading, error };
};
