import type { TTeamMemberItem } from '../lib/types/TTeamMemberItem';

import AnetaSkacelova from '../assets/img/portrety-manazeru/AnetaSkacelova.webp';
import MartinaBrundova from '../assets/img/portrety-manazeru/MartinaBrundova.webp';
import NatalieEgartova from '../assets/img/portrety-manazeru/NatalieEgartova.webp';
import NatalieLambova from '../assets/img/portrety-manazeru/NatalieLambova.webp';
import NikolUngvari from '../assets/img/portrety-manazeru/NikolUngvari.webp';
import RenataHucmanova from '../assets/img/portrety-manazeru/RenataHucmanova.webp';
import VendulaSkalova from '../assets/img/portrety-manazeru/VendulaSkalova.webp';
import ViktoriaKocmanova from '../assets/img/portrety-manazeru/ViktoriaKocmanova.webp';

export const teamMemberItems: TTeamMemberItem[] = [
  {
    id: 0,
    name: 'Aneta Skácelová',
    position: 'Manažerka projektu',
    email: 'ahoj@culturea.cz',
    img: AnetaSkacelova,
    phone: '724 919 193',
  },
  {
    id: 1,
    name: 'Renáta Hucmanová',
    position: 'Manažerka produkce',
    email: 'produkce@culturea.cz',
    img: RenataHucmanova,
    phone: '(+421) 949 357 893',
  },
  {
    id: 2,
    name: 'Viktória Kocmanová',
    position: 'Manažerka produkce',
    email: 'produkce@culturea.cz',
    img: ViktoriaKocmanova,
    phone: '(+421) 948 233 456',
  },
  {
    id: 3,
    name: 'Nikol Ungvári',
    position: 'PR manažerka',
    email: 'pr@culturea.cz',
    img: NikolUngvari,
    phone: '773 249 592',
  },
  {
    id: 4,
    name: 'Martina Břundová',
    position: 'Promo manažerka',
    email: 'promo@culturea.cz',
    img: MartinaBrundova,
    phone: '702 543 033',
  },
  {
    id: 5,
    name: 'Natalie Lambova',
    position: 'Promo manažerka',
    email: 'promo@culturea.cz',
    img: NatalieLambova,
    phone: '731 063 867',
  },
  {
    id: 6,
    name: 'Natálie Egartová',
    position: 'Art manažerka (grafika, videospot)',
    email: 'art@culturea.cz',
    img: NatalieEgartova,
    phone: '731 856 863',
  },
  {
    id: 7,
    name: 'Vendula Skalová',
    position: 'Art manažerka (výzdoba, dekorace)',
    email: 'art@culturea.cz',
    img: VendulaSkalova,
    phone: '730 829 330',
  },
];
