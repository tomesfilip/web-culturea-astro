import { onAuthStateChanged, type User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '../config/firebase';

export const useMonitorAuthUser = () => {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const monitorUser = async () => {
      try {
        onAuthStateChanged(auth, (user) => {
          setLoggedUser(user);
        });
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

    monitorUser();
    return () => abortController.abort();
  }, []);

  return { loggedUser, isLoading, error };
};
