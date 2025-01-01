import { LastYearSlider } from '../components/history/LastYearSlider';
import { ThisYearVideo } from '../components/history/ThisYearVideo';

import { Section } from '../components/shared/Section';

import '../styles/dashedBorder.css';

export const SectionLastYear = () => {
  return (
    <Section
      id="historie"
      className="py-12 lg:py-[120px] xl:py-[160px] bg-dark-brown gap-y-12"
      headlineClassName="text-white"
      noPXDesktop
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-white max-w-screen-2xl ml-auto">Minulý ročník</h3>
          <LastYearSlider />
        </div>
        <div className="space-y-8">
          <div className="w-full text-center text-white">
            <p className="text-xl leading-none lg:text-[45px] uppercase xl:leading-[60px] font-headline">
              Kuba a Maroko
            </p>
            <p className="text-xl leading-none lg:text-[45px] font-bold xl:leading-[60px] font-headline">
              2024
            </p>
          </div>
          <ThisYearVideo />
        </div>
      </div>
      {/* <div className="space-y-8 text-white py-8 flex flex-col items-center max-w-[800px]">
        <div className="space-y-2">
          <h3 className="text-center">Kuba</h3>
          <p>
            Krajina jako z Pinterestu. Tak by se dala označit Kuba, která svou
            barevností zkrášluje nejen profil na internetu. Očaruje vás svojí
            jedinečnou atmosférou, kterou si můžete vychutnat na jedné z mnoha
            písečných pláží při pověstné kubánské cigaretě nebo tradičním
            mojitu. Hlavním městem tohoto ostrovního státu je Havana, jejímiž
            uličkami, plnými koloniálních památek, se promenádují styloví
            veteráni. Mimoto mají tyto ulice sílu vtáhnout vás do rytmu tanců,
            které hýbou nejen Havanou, ale celou Kubou. Při její návštěvě žádný
            turista neopomene navštívit promenádu Malecón nebo náměstí Habana
            Vieja.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-center">Maroko</h3>
          <p>
            Hory, poušť i pláže? Historická města pulzující životem, klikaté
            uličky a tržiště vonící kořením? To vše má Maroko, země kontrastů,
            království barev, chutí a vůní, domovina mandarinek a mátového čaje.
          </p>
          <p>
            Čarovné krajiny Maroka tvoří vstupní bránu do Afriky, na jejímž
            severozápadním okraji leží. Hlavním městem je Rabat, navštěvovanější
            jsou ale královská města Marrakéš a Fez nebo přístavní Casablanca.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-center">Slow Travel</h3>
          <p>
            Slow travel je jako umělecká kompozice, kde každá nota vytváří
            harmonii zážitků. Jedná se o druh cestování, kde není prioritou
            navštívit co nejvíce míst, ale naopak zpomalit, zklidnit mysl,
            nadechnout se a užít si vše, co daná lokalita nabízí.
          </p>
          <p>
            Slow travel je o trávení co nejvíce času na jednom místě. Zaměřuje
            se na hloubkové prozkoumání destinace, ducha tamní kultury a na
            prožívání každodenního života místních lidí. Díky tomu otevírá dveře
            k autentickým interakcím a novým poznáním.
          </p>
        </div>
      </div> */}
    </Section>
  );
};
