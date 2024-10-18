import { Section } from '../components/shared/Section';

export const SectionProgram = () => {
  return (
    <Section sectionId="program" sectionName="Program">
      <div className="max-w-[600px] space-y-5 text-lg">
        <p>
          Dvanáctým ročníkem, který proběhl 3. dubna 2024 v kavárně 14|15 Baťova
          institutu ve Zlíně, nás provázela exotická atmosféra a řada zajímavých
          hostů. O svých zážitcích z cest vyprávěli návštěvníkům Šebestián Bok a
          Michal Kroužel, o rady o slow travel se podělil cestovatel Matouš Vinš
          a o zpestření v podobě live cooking show se postaral Adam Rundus.
          Nechyběl ani hudební program v podání kapely Sabor Latino a taneční
          vystoupení Euphoria Dance Brno.
        </p>
        <p>
          Celý program doplnila interaktivní hra, ochutnávka tradičních
          specialit a degustace marockého čaje, kreativní workshopy a marocká
          tržnice. A na závěr proběhla afterparty v kubánském stylu.
        </p>
        <p>Co se bude dít v následujícím ročníku, zjistíte již brzy!</p>
      </div>
      {/* <p className="text-xl">Program moderuje Slávek Král</p> */}
      {/* <MainProgram /> */}
      {/* <ExtraProgram /> */}
      {/* <InfoBannerProgram /> */}
    </Section>
  );
};
