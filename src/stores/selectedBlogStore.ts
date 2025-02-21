import { atom } from 'nanostores';
import type { TBlogItem } from '../lib/types/TBlogItem';

export const selectedBlogStore = atom<TBlogItem | null>(null);
