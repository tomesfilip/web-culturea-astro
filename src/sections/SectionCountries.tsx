import irelandImg from '../assets/img/countries/ireland-mob.webp';
import { CountryItem } from '../components/countries/CountryItem';
import { Section } from '../components/shared/Section';

export const SectionCountries = () => {
  return (
    <Section id="zeme" className="bg-light-green text-beige xl:px-0">
      <h3 className="px-4 lg:px-20 xl:px-24">Země 2025</h3>
      <CountryItem
        img={irelandImg.src}
        alt="IRSKO"
        headline="IRSKO"
        text="Země zelených kopců, mystických hradů a dechberoucí krajiny. Tento „Smaragdový ostrov“ láká návštěvníky svou syrovou krásou, divokým pobřežím a bohatou historií, která zanechala stopy v každém kameni a ruině. Nabízí rozmanité scenérie od rušných ulic Dublinu, hlavního města prosyceného historií, hudbou a literaturou, až po klidné vesničky roztroušené po celém ostrově. Irsko má pro každého něco kouzelného."
      />
    </Section>
  );
};
