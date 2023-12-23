import type { TContactItem } from '../types/TContactItem';
import type { TSocialItem } from '../types/TSocialItem';

import fbLogo from '../assets/img/icons/facebook.svg?url';
import igLogo from '../assets/img/icons/instagram.svg?url';
import sfLogo from '../assets/img/icons/spotify.svg?url';
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
  {
    imgSrc: sfLogo,
    imgAlt: 'Culturea spotify',
    socLink:
      'https://open.spotify.com/show/63TQbV3BDMi5g65zBR41Se?si=13b34f5416a34b67',
  },
  {
    imgSrc: ytLogo,
    imgAlt: 'Culturea youtube',
    socLink: 'https://www.youtube.com/channel/UC1yEl3yhmv0UmVbRhanyeyA',
  },
];
