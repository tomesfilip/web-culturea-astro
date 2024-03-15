import type { TProgramItem } from '../lib/types/TProgramItem';

import krouzelImg from '../assets/img/program/michal_krouzel.jpg';
import sebastianImg from '../assets/img/program/sebestian_bok.jpg';
import vinsImg from '../assets/img/program/matous_vins.jpg';
import adamdorotaImg from '../assets/img/program/adam_dorota.jpg';
import rundusImg from '../assets/img/program/adam_rundus.jpg';

export const programItems: TProgramItem[] = [
  {
    time: '13:00',
    presenter: 'Otevření bran, začátek',
  },
  {
    time: '13:00 - 15:00',
    headline: 'přednáška: Stopem do Maroka a zase zpět ',
    presenter: 'Šebestian Bok',
    img: sebastianImg,
  },
  {
    time: '15:30 - 16:00',
    headline: 'přednáška" Kuba - země dvojí tváře ',
    presenter: 'Michal Kroužel',
    img: krouzelImg,
  },
  {
    time: '16:30 - 17:00',
    headline: 'přednáška: Proč a jak cestovat chytře, pomalu a dluho',
    presenter: 'Matouš Vinš',
    img: vinsImg,
  },
  {
    time: '16:45',
    headline: '',
    presenter: 'Latino Show - Taneční vystoupení Euphoria Dance Brno',
  },
  {
    time: '???',
    presenter: 'Kreativní workshopy?',
  },
  {
    time: '17:30 - 18:15',
    headline: 'diskuze: Cesta po Jižní a Střední Americe ve stylu Slow Travel',
    presenter: 'Adam Rundus a Dorota Dostálová',
    img: adamdorotaImg,
  },
  {
    time: '18:15 - 19:00',
    headline: 'Adamem Rundusem + MasterChef výzva',
    presenter: 'Live cooking show',
    img: rundusImg,
  },
  {
    time: '19:00 - 19:15',
    presenter: 'Vyhlášení soutěže a poděkování',
  },
  {
    time: '19:15 - 20:00',
    presenter: 'Hudební kapela Sabor Latino',
  },
  {
    time: '20:00',
    presenter: 'Závěr akce',
  },
  {
    time: '21:00',
    presenter: 'AfterParty v kubánském stylu',
  },
];

export const extraProgramItems: TProgramItem[] = [
  {
    time: '5. 4. 2023 v 18:00',
    headline: 'Workshop malování Hennou',
    place: 'Café 204 Zlín',
    additionalInfo: ' vstup 79 Kč',
  },
];
