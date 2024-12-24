import { Section } from '../components/shared/Section';

export const SectionProgram = () => {
  return (
    <Section id="program" title="Program" className="bg-beige">
      <div className="max-w-[700px] space-y-5 text-lg text-dark-green">
        <p>
          Dvanáctý ročník, který se konal 3. dubna 2024 v kavárně 14|15 Baťova
          institutu ve Zlíně, nabídl exotickou atmosféru a zajímavé hosty. O
          cestách vyprávěli Šebestián Bok a Michal Kroužel, rady o slow travel
          přidal Matouš Vinš, a live cooking show předvedl Adam Rundus. Program
          obohatila kapela Sabor Latino, taneční vystoupení Euphoria Dance Brno,
          ochutnávka tradičních specialit, kreativní workshopy a marocká
          tržnice. Na závěr nechyběla kubánská afterparty.
        </p>
        <p className="text-2xl font-semibold">
          Co přinese další ročník, se dozvíte brzy!
        </p>
      </div>
      {/* <p className="text-xl">Program moderuje Slávek Král</p> */}
      {/* <MainProgram /> */}
      {/* <ExtraProgram /> */}
      {/* <InfoBannerProgram /> */}
    </Section>
  );
};
