import irelandImg from '../assets/img/countries/ireland-mob.webp';
import newZealand from '../assets/img/countries/new-zealand-mob.webp';
import { CountryItem } from '../components/countries/CountryItem';
import { Section } from '../components/shared/Section';

const countries = [
  {
    img: irelandImg.src,
    alt: 'IRSKO',
    headline: 'IRSKO',
    text: 'Země zelených kopců, mystických hradů a dechberoucí krajiny. Tento „Smaragdový ostrov“ láká návštěvníky svou syrovou krásou, divokým pobřežím a bohatou historií, která zanechala stopy v každém kameni a ruině. Nabízí rozmanité scenérie od rušných ulic Dublinu, hlavního města prosyceného historií, hudbou a literaturou, až po klidné vesničky roztroušené po celém ostrově. Irsko má pro každého něco kouzelného.',
  },
  {
    img: newZealand.src,
    alt: 'Nový Zéland',
    headline: 'Nový Zéland',
    text: 'Horská pásma, divoké lesy či písčité pláže, tím vším se může chlubit Nový Zéland. Souostroví je unikátní svou nedotčenou přírodou, svéráznou krajinou, která ztvárnila kulisu například v Pánovi prstenů, a výskytem ojedinělých druhů rostlin i živočichů. Na místních tradicích se podílí Maorové, z jejichž kulturního dědictví pochází tance, písně či ornamentální tetování. Nový Zéland nabízí klid i ruch, kulturu i přírodní scenérie - zkrátka celý cizí svět, který stojí za to navštívit.',
  },
];

export const SectionCountries = () => {
  return (
    <Section id="zeme" className="bg-light-green text-beige xl:px-0">
      <h3 className="px-4 lg:px-20 xl:px-24">Země 2025</h3>
      {countries.map((country, index) => (
        <CountryItem isEven={index % 2 === 0} {...country} />
      ))}
    </Section>
  );
};
