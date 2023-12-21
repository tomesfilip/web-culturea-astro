import { Section } from '../components/shared/Section';

export const SectionAbout = () => {
  return (
    <Section sectionId="o-festivalu">
      <div className="flex text-white mx-40 mt-20 pb-40">
        <div className="w-1/2 flex flex-col pb-20 justify-center">
          <h2 className="font-bold text-left ">O festivalu</h2>
          <p className="mb-8 text-left text-2xl">
            Festival přinášející do Zlína esenci dalekých krajin
          </p>
          <div className="flex flex-col justify-end items-end text-xl px-20 pr-40 text-left w-full">
            <p className="mb-4">
              Culturea je festival, který umožňuje poznání cizích kultur všemi
              smysly. Nabízí návštěvníkům možnost vidět, slyšet, ochutnat,
              dotknout se a pocítit atmosféru dalekých krajin na vlastní kůži.
            </p>
            <p className="mb-4">
              Každý ročník festival Culturea představí dvě země, které jsou od
              sebe poměrně vzdálené a na první pohled zcela odlišné, ve skrytu
              jsou si však něčím velmi podobné.
            </p>
            <p className="mb-4">
              Již dvanáctý rok projekt organizují studenti Fakulty
              multimediálních komunikací Univerzity Tomáše Bati ve Zlíně.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-start justify-start relative">
          <div className="flex items-end justify-end">
            <img
              src="/o-festivalu/x-challenge.jpg"
              alt="X Challenge"
              className="h-auto w-3/4"
            />
          </div>
          <img
            src="/o-festivalu/tym.jpg"
            alt="O festivalu - tym"
            className="absolute bottom-4 mt-8 w-1/2"
          />
        </div>
      </div>
    </Section>
  );
};
