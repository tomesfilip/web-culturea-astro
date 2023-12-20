import { CULTUREA_YEAR } from '../../lib/constants';
import FooterLogo from '../footer/FooterLogo';
import SocialList from '../footer/SocialList';

const Footer = () => {
  return (
    <footer
      id="kontakt"
      style={{
        backgroundImage: 'url(./pozadi_paticka.jpg)',
        backgroundSize: 'cover',
      }}
      className="py-8 xl:px-24"
    >
      <div className="flex flex-wrap items-start justify-between mx-auto mt-20 mb-6 xl:flex-row xl:justify-between xl:mb-24 xl:gap-y-0">
        <SocialList />
        <div className="flex flex-col justify-between xl:px-0 text-white text-xl">
          <p className="pb-5 ">
            Tento web není oficiální stránkou Univerzity Tomáše Bati ve Zlíně.
            Jedná se o web <br />
            k projektu Culturea, který je spravován studenty v rámci předmětu
            <br />
            Komunikační agentura Fakulty multimediálních komunikací Univerzity
            Tomáše Bati ve Zlíně.
          </p>
          <p className="font-bold">
            Obsahový správce: Eva Gartnerová,&nbsp;
            <a href="mailto:gartnerova@utb.cz">gartnerova@utb.cz</a>
          </p>
          <p className="font-bold">
            Technický správce: Ondřej Staněk,&nbsp;
            <a href="mailto:ostanek@utb.cz">ostanek@utb.cz</a>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center pr-14">
          <FooterLogo />
        </div>
      </div>
      <div className="text-white text-center">
        © {CULTUREA_YEAR}, Všechna práva vyhrazena
      </div>
    </footer>
  );
};

export default Footer;
