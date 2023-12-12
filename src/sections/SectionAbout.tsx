import Section from '../components/shared/Section'

const SectionAbout = () => {
  return (
    <Section sectionId="o-festivalu" sectionName="O festivalu">
      <div className="mx-auto w-full lg:w-3/5 xl:w-2/5 text-center">
        <p className="mb-4 xl:mb-8 text-lg xl:text-2xl">
          Culturea je festival, který umožňuje poznání cizích kultur všemi
          smysly. Nabízí návštěvníkům možnost vidět, slyšet, ochutnat, dotknout
          se a pocítit atmosféru dalekých krajin na vlastní kůži.
        </p>
        <p className="text-lg xl:text-2xl mb-4 xl:mb-8">
          Každý ročník festival Culturea představí dvě země, které jsou od sebe
          poměrně vzdálené a na první pohled zcela odlišné, ve skrytu jsou si
          však něčím velmi podobné.
        </p>
        <p className="text-lg xl:text-2xl mb-4 xl:mb-8">
          Již dvanáctý rok projekt organizují studenti Fakulty multimediálních
          komunikací Univerzity Tomáše Bati ve Zlíně.
        </p>
      </div>
    </Section>
  )
}

export default SectionAbout
