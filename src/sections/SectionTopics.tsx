const SectionTopics = () => {
  return (
    <div className="px-20 pb-20 flex flex-col flex-wrap">
      <h1 className="text-5xl text-center px-20 pb-20 mt-10 mb-16 font-bold font-bold">
        Témata, na která se můžete těšit
      </h1>
      <div className="grid grid-cols-2 grid-rows-3 gap-20 mx-40">
        <div>
          <img src="../../public/foto_kuba.jpg" alt="" />
        </div>
        <div
          style={{ width: '2fr', height: '1fr' }}
          className="font-bold text-left "
        >
          <h2 className="pb-5">Kuba</h2>
          <p className="text-xl">
            Krajina jako z Pinterestu. Tak by sa dala označit Kuba, která svou
            barevností zkrášluje nejen profil na internetu. Očaruje vás svojí
            jedinečnou atmosférou, kterou si můžete vychutnat na jedné z mnoha
            písečných pláží při pověstné kubánské cigaretě nebo tradičním
            kubánském mojitu.
          </p>
          <br />
          <p className="text-xl">
            Hlavním městem tohoto ostrovního státu je Havana, jejímiž uličkami,
            plných koloniálních památek, se promenádují stylový veteráni. Mimoto
            mají tyto ulice sílu vtáhnout vás do rytmu a tance, které hýbou
            nejen Havanou, ale celou krajinou. (Při její návštěvě žádný turista
            neopomene navštívit promenádu Malecón nebo náměstí Habana Vieja.)
          </p>
        </div>
        <div style={{ width: '2fr', height: '1fr' }} className="text-right">
          <h2 className="pb-5">Maroko</h2>
          <p className="text-xl">
            Hory, poušť i pláže? Historická města pulzující životem, klikaté
            uličky a tržiště vonící kořením? To vše má Maroko, země kontrastů,
            království barev, chutí a vůní, domovina mandarinek a mátového čaje.
          </p>
          <br />
          <p className="text-xl">
            Čarovné krajiny Maroka tvoří vstupní bránu do Afriky, na jejímž
            severozápadním okraji leží. Hlavním městem je Rabat, navštěvovanější
            jsou ale královská města Marrakéš a Fez nebo přístavní Casablanca.
          </p>
        </div>
        <div style={{ width: '2fr', height: '1fr' }} className="">
          <img src="../../public/foto_maroko.jpg" alt="" />
        </div>
        <div style={{ width: '2fr', height: '1fr' }} className="">
          <img src="../../public/foto_slow_travel.jpg" alt="" />
        </div>
        <div style={{ width: '2fr', height: '1fr' }} className="">
          <h2 className="pb-5">Slow Travel</h2>
          <p className="text-xl">
            Slow travel je jako umělecká kompozice, kde každá nota vytváří
            harmonii zážitků. Jedná se o druh cestování, kde není prioritou
            navštívit co nejvíce míst, ale naopak zpomalit, zklidnit mysl,
            nadechnout se a užít si vše, co daná lokalita nabízí.
            <br />
          </p>
          <p className="text-xl">
            Slow travel je o trávení co nejvíce času na jednom místě. Zaměřuje
            se na hloubkové prozkoumání destinace, ducha tamní kultury a na
            prožívání každodenního života místních lidí. Díky tomu otevírá dveře
            k autentickým interakcím a novým poznáním.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('./ripped_paper_bot.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative w-full h-[180px] bg-no-repeat bottom-0 top-32"
      ></div>
    </div>
  );
};

export default SectionTopics;
