import { getDocs, limit, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { blogCollectionRef } from '../config/firebase';
import type { TBlogItem } from '../lib/types/TBlogItem';

export const useFetchBlogList = (blogLimit: number = 20) => {
  const [data, setData] = useState<TBlogItem[] | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const blogQueryOrderedLimit = query(
          blogCollectionRef,
          orderBy('createdAt', 'desc'),
          limit(blogLimit),
        );

        const snapshot = await getDocs(blogQueryOrderedLimit);

        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as TBlogItem[],
        );

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
