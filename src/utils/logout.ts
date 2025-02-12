import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export const logout = async () => {
  if (!auth) {
    return;
  }
  try {
    await signOut(auth);
  } catch (error) {
    console.error(`Sign out error: ${error}`);
  }
};
