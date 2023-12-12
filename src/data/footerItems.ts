import type { TContactItem } from '../lib/types/TContactItem';
import type { TSocialItem } from '../lib/types/TSocialItem';

import fbLogo from '../assets/img/icons/facebook-logo.svg?url';
import igLogo from '../assets/img/icons/instagram-logo.svg?url';
import tiktokLogo from '../assets/img/icons/tiktok-logo.svg?url';

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

export const socialItems: TSocialItem[] = [
  {
    imgSrc: igLogo,
    imgAlt: 'Culturea instagram',
    socLink: 'https://www.instagram.com/culturea/',
  },
  {
    imgSrc: fbLogo,
    imgAlt: 'Culturea facebook',
    socLink: 'https://fb.me/e/7nGGaBHnI',
  },
];
