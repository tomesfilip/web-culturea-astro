import { CULTUREA_YEAR } from '../../lib/constants';
import FooterLogo from '../footer/FooterLogo';
import SocialList from '../footer/SocialList';

const Footer = () => {
  return (
    <footer
      id="kontakt"
      style={{
        backgroundImage: 'url(/pozadi/footer.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative w-full max-w-screen-2xl mx-auto pt-24 pb-8 space-y-8 flex flex-col items-center">
        <div className="hidden lg:block lg:absolute left-4">
          <SocialList />
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between gap-8 lg:gap-12 xl:gap-20 px-4 sm:px-8 lg:px-20">
          <div className="text-white text-xl w-full max-w-[620px] xl:max-w-[796px]">
            <p className="pb-5">
              Tento web není oficiální stránkou Univerzity Tomáše Bati ve Zlíně.
              Jedná se o web <br />
              k projektu Culturea, který je spravován studenty v rámci předmětu
              <br />
              Komunikační agentura Fakulty multimediálních komunikací Univerzity
              Tomáše Bati ve Zlíně.
            </p>
            <p>
              Obsahový správce: Eva Gartnerová,&nbsp;
              <a href="mailto:gartnerova@utb.cz">gartnerova@utb.cz</a>
            </p>
            <p>
              Technický správce: Ondřej Staněk,&nbsp;
              <a href="mailto:ostanek@utb.cz">ostanek@utb.cz</a>
            </p>
          </div>
          <FooterLogo />
        </div>
        <div className="block lg:hidden">
          <SocialList />
        </div>
        <div className="text-white text-center">
          © {CULTUREA_YEAR}, Všechna práva vyhrazena
        </div>
      </div>
    </footer>
  );
};

export default Footer;
