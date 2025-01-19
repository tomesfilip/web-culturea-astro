import { ProgramIcon1, ProgramIcon2 } from '../components/icons/ProgramIcons';
import { Section } from '../components/shared/Section';

export const SectionProgram = () => {
  return (
    <Section id="program" title="Program" className="bg-beige pt-20">
      <>
        {/*   width="173"
      height="270" */}
        <ProgramIcon1 className="absolute top-0 left-0" />
        <ProgramIcon2 className="absolute top-0 right-0 hidden md:block z-[1] w-[90px] h-[140px] lg:w-[173px] lg:h-[270px]" />
        <div className="max-w-[700px] space-y-5 md:text-lg text-dark-green relative z-[2]">
          <p>
            Dvanáctý ročník, který se konal 3. dubna 2024 v kavárně 14|15 Baťova
            institutu ve Zlíně, nabídl exotickou atmosféru a zajímavé hosty. O
            cestách vyprávěli Šebestián Bok a Michal Kroužel, rady o slow travel
            přidal Matouš Vinš, a live cooking show předvedl Adam Rundus.
            Program obohatila kapela Sabor Latino, taneční vystoupení Euphoria
            Dance Brno, ochutnávka tradičních specialit, kreativní workshopy a
            marocká tržnice. Na závěr nechyběla kubánská afterparty.
          </p>
          <p className="text-xl md:text-2xl font-semibold">
            Co přinese další ročník, se dozvíte brzy!
          </p>
        </div>
        {/* <p className="text-xl">Program moderuje Slávek Král</p> */}
        {/* <MainProgram /> */}
        {/* <ExtraProgram /> */}
        {/* <InfoBannerProgram /> */}
      </>
    </Section>
  );
};
