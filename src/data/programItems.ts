import type { TProgramItem } from '../lib/types/TProgramItem';

import adamdorotaImg from '../assets/img/program/adam_dorota.webp';
import rundusImg from '../assets/img/program/adam_rundus.webp';
import vinsImg from '../assets/img/program/matous_vins.webp';
import krouzelImg from '../assets/img/program/michal_krouzel.webp';
import sebastianImg from '../assets/img/program/sebestian_bok.webp';

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
    content:
      'Na přednášce uslyšíte mnoho praktických rad o stopování doplněných řadou fascinujících příběhů z cesty po Maroku. Mimo jiné poznáte, jaké to je bloudit marockou přírodou, ztrácet se v medínách nebo zvládnout časově téměř nemožnou jízdu na Saharu díky osudové náhodě.',
  },
  {
    time: '15:30 - 16:00',
    headline: 'přednáška" Kuba - země dvojí tváře ',
    presenter: 'Michal Kroužel',
    img: krouzelImg,
    content:
      'Země známá pro své přírodní krásy, všudypřítomnou salsu, naleštěná auta z 60. let, kvalitní doutníky i vynikající rum. Je Kuba skutečně taková? Jaká je její druhá tvář a jak moc ji ovlivňují turisté, místní nebo postupné uvolňování přísného komunistického režimu? Odpovědi na všechny tyto otázky se dozvíte na přednášce!',
  },
  {
    time: '16:30 - 17:00',
    headline: 'přednáška: Proč a jak cestovat chytře, pomalu a dluho',
    presenter: 'Matouš Vinš',
    img: vinsImg,
    content:
      'V čem se pomalé cestování zásadně liší od běžného a proč byste ho měli zkusit i vy? Na přednášce na vás čekají praktické tipy a triky pro Work & Travel a gap year, dobrovolnictví i digitální nomádství.',
  },
  {
    time: '16:45',
    headline: '',
    presenter: 'Latino Show - Taneční vystoupení Euphoria Dance Brno',
    content: 'Brněnská taneční skupina známá svojí originalitou a rozmanitostí tanečních stylů, předvede v rámci vystoupení Latino Show mix tanců salsa a chachacha.'
  },
  {
    time: '',
    presenter: 'Kreativní workshopy',
  },
  {
    time: '17:30 - 18:15',
    headline: 'diskuze: Cesta po Jižní a Střední Americe ve stylu Slow Travel',
    presenter: 'Adam Rundus a Dorota Dostálová',
    img: adamdorotaImg,
    content:
      'Adam Rundus, známý především jako účastník kulinářské show MasterChef Česko 2023, tentokrát odhodí zástěru. Se svou přítelkyní Dorotou Dostálovou v rámci diskuze mimo jiné povypráví o společném cestování ve stylu Slow Travel po Jižní a Střední Americe.',
  },
  {
    time: '18:15 - 19:00',
    headline: 'Adamem Rundusem + MasterChef výzva',
    presenter: 'Live cooking show',
    img: rundusImg,
    content:
      'Po live cooking show známého kuchaře z televizní show MasterChef Česko 2023, Adama Runduse, se můžete těšit i na pravou kulinářskou výzvu. Co jsme si pro Adama připravili? Uspěje? Nenechte si live cooking show ani tuto jedinečnou Culturea výzvu ujít!',
  },
  {
    time: '19:00 - 19:15',
    presenter: 'Vyhlášení soutěže a poděkování',
  },
  {
    time: '19:15 - 20:00',
    presenter: 'Hudební kapela Sabor Latino',
    content:
      'Na jaké rytmy tančí praví Kubánci? Přijďte si poslechnout hity kubánské taneční hudby a nechte své tělo rozhýbat v rytmu salsy a Latin Jazzu v podání hudební kapely Sabor Latino.',
  },
  {
    time: '20:00',
    presenter: 'Závěr akce',
  },
  {
    time: '21:00',
    presenter: 'AfterParty v kubánském stylu',
    place: 'místo: Sklep 33, Zlín',
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
