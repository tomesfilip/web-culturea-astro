import type { TContactItem } from '../lib/types/TContactItem';

import fbLogo from '../assets/img/icons/facebook.svg?url';
import igLogo from '../assets/img/icons/instagram.svg?url';
import ytLogo from '../assets/img/icons/youtube.svg?url';

export const contactItems: TContactItem[] = [
  {
    contactName: 'Všeobecné',
    contactMail: 'ahoj@culturea.cz',
  },
  {
    contactName: 'Sales',
    contactMail: 'fundraising@culturea.cz',
  },
  {
    contactName: 'Promo',
    contactMail: 'promo@culturea.cz',
  },
  {
    contactName: 'PR',
    contactMail: 'pr@culturea.cz',
  },
  {
    contactName: 'Produkce',
    contactMail: 'produkce@culturea.cz',
  },
  {
    contactName: 'Art',
    contactMail: 'art@culturea.cz',
  },
];

export const socialItems = [
  {
    imgSrc: igLogo,
    imgAlt: 'Culturea instagram',
    socLink: 'https://www.instagram.com/culturea/',
  },
  {
    imgSrc: fbLogo,
    imgAlt: 'Culturea facebook',
    socLink: 'https://www.facebook.com/Culturea',
  },
  {
    imgSrc: ytLogo,
    imgAlt: 'Culturea youtube',
    socLink: 'https://www.youtube.com/channel/UC1yEl3yhmv0UmVbRhanyeyA',
  },
];
