import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../../config/firebase';
import { AUTH_ERRORS_MAPPED } from '../../../constants';
import { isAuthModalOpen } from '../../../stores/authModalStore';
import { LabelledInput } from './LabelledInput';

export const BlogAuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthError('');
      isAuthModalOpen.set(false);
    } catch (error: any) {
      const errorKey =
        Object.keys(AUTH_ERRORS_MAPPED).find((key) =>
          error.message.includes(key),
        ) ?? 'something-wrong';
      return setAuthError(AUTH_ERRORS_MAPPED[errorKey]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login();
    setTimeout(() => {
      window.location.href = '/blog';
    }, 500);
  };

  return (
    <form
      action="/blog"
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col flex-wrap gap-y-8 w-[90%] max-w-sm bg-beige rounded-lg p-4 z-20 mx-auto"
    >
      <div className="space-y-3">
        <LabelledInput
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          text="Email"
        />
        <LabelledInput
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          text="Heslo"
        />
      </div>
      <button
        type="submit"
        className="bg-dark-green px-4 py-2 rounded-lg text-lg text-white"
      >
        Přihlásit
      </button>
      {authError && <p className="text-red-700 text-center">{authError}</p>}
    </form>
  );
};
