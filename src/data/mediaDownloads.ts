import type { TMediaItem } from '../lib/types/TMediaItem';

import mediaFile from '../assets/img/icons/media-file.svg';
import mediaVisual from '../assets/img/icons/media-visual.svg';
import { CULTUREA_YEAR } from '../constants';

export const mediaItems: TMediaItem[] = [
  {
    img: mediaFile,
    imgAlt: 'soubor',
    text: 'Tiskové zprávy',
    link: 'https://drive.google.com/drive/folders/1KfVJSyo5t9LDgNVdmrIyMkPK507j7G-v',
  },
  {
    img: mediaVisual,
    imgAlt: 'deska na malování',
    text: `Vizuál ${CULTUREA_YEAR}`,
    link: 'https://drive.google.com/drive/folders/1j9ad7MkIAUgtWpoTbrjcJCN5QQHbabYU',
  },
];
