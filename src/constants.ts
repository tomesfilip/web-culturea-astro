import type { TAuthErrorMap } from './types/TAuthErrorMap';

export const CULTUREA_YEAR = '2024';
export const FIREBASE_IMG_FILE_LIMIT = 3145728;

export const AUTH_ERRORS_MAPPED: TAuthErrorMap = {
  'user-not-found': 'Neexistující uživatel.',
  'wrong-password': 'Špatné heslo.',
  'network-request-failed': 'Chyba v internetovém připojení',
  'something-wrong': 'Neznámá chyba při přihlasování.',
};
