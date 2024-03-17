import type { TProgramItem } from '../lib/types/TProgramItem';

import adamdorotaImg from '../assets/img/program/adam_dorota.jpg';
import rundusImg from '../assets/img/program/adam_rundus.jpg';
import vinsImg from '../assets/img/program/matous_vins.jpg';
import krouzelImg from '../assets/img/program/michal_krouzel.jpg';
import sebastianImg from '../assets/img/program/sebestian_bok.jpg';

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
      'Na přednášce uslyšíte mnoho praktic-kých rad o stopování doplněných řadou fascinujících příběhů z cesty po Maroku. Mimo jiné poznáte, jaké to je bloudit marockou přírodou, ztrácet se v medí-nách nebo zvládnout časově téměř ne-možnou jízdu na Saharu díky osudové náhodě.',
  },
  {
    time: '15:30 - 16:00',
    headline: 'přednáška" Kuba - země dvojí tváře ',
    presenter: 'Michal Kroužel',
    img: krouzelImg,
    content:
      'Země známá pro své přírodní krásy, všudypřítomnou salsu, naleštěná auta z 60. let, kvalitní doutníky i vynikající rum. Je Kuba skutečně taková? Jaká je její druhá tvář a jak moc ji ovlivňují tu-risté, místní nebo postupné uvolňování přísného komunistického režimu? Odpo-vědi na všechny tyto otázky se dozvíte na přednášce!',
  },
  {
    time: '16:30 - 17:00',
    headline: 'přednáška: Proč a jak cestovat chytře, pomalu a dluho',
    presenter: 'Matouš Vinš',
    img: vinsImg,
    content:
      'V čem se pomalé cestování zásadně liší od běžného a proč byste ho měli zkusit i vy? Na přednášce na vás čekají prak-tické tipy a triky pro Work & Travel a gap year, dobrovolnictví i digitální nomádství.',
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
    content:
      'Adam Rundus, známý především jako účastník kulinářské show MasterChef Česko 2023, tentokrát odhodí zástěru. Se svou přítelkyní Dorotkou v rámci diskuze mimo jiné povypráví o společném cesto-vání ve stylu Slow Travel po Jižní a Stře-dní Americe.',
  },
  {
    time: '18:15 - 19:00',
    headline: 'Adamem Rundusem + MasterChef výzva',
    presenter: 'Live cooking show',
    img: rundusImg,
    content:
      'Po live cooking show známého kuchaře z televizní show MasterChef Česko 2023, Adama Runduse, se můžete těšit i na pra-vou kulinářskou výzvu. Co jsme si pro Adama připravili? Uspěje? Nenechte si live cooking show ani tuto jedinečnou Culturea výzvu ujít!',
  },
  {
    time: '19:00 - 19:15',
    presenter: 'Vyhlášení soutěže a poděkování',
  },
  {
    time: '19:15 - 20:00',
    presenter: 'Hudební kapela Sabor Latino',
    content:
      'Na jaké rytmy tančí praví Kubánci? Přijďte si poslechnout hity kubánské ta-neční hudby a nechte své tělo rozhýbat v rytmu salsy a Latin Jazzu v podání hu-dební kapely Sabor Latino.',
  },
  {
    time: '20:00',
    presenter: 'Závěr akce',
    content:
      'Brněnská taneční skupina známá svojí originalitou a rozmanitostí tanečních stylů, předvede v rámci vystoupení La-tino Show mix tanců salsa a chachacha.',
  },
  {
    time: '21:00',
    presenter: 'AfterParty v kubánském stylu',
    content: 'místo: Sklep 33, Zlín',
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
