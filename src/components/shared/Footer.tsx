import { CULTUREA_YEAR } from '../../constants';
import { SocialList } from '../footer/SocialList';
import { LogoLink } from '../header/LogoLink';

export const Footer = () => {
  return (
    <footer id="kontakt" className="bg-dark-green text-beige">
      <div className="relative w-full pt-10 pb-4 flex flex-col max-w-screen-lg px-4 lg:px-0 mx-auto gap-y-10">
        <div className="w-full space-y-4">
          <p>
            Tento web není oficiální stránkou Univerzity Tomáše Bati ve Zlíně.
            Jedná se o web <br />
            k projektu Culturea, který je spravován studenty v rámci předmětu
            <br />
            Komunikační agentura Fakulty multimediálních komunikací Univerzity
            Tomáše Bati ve Zlíně.
          </p>
          <p>
            Obsahový a technický správce: Ondřej Staněk,&nbsp;
            <a href="mailto:ostanek@utb.cz" className="underline">
              ostanek@utb.cz
            </a>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <LogoLink isFooter />
          <SocialList isWhiteColor />
        </div>
        <div className="text-center">
          © {CULTUREA_YEAR}, Všechna práva vyhrazena
        </div>
      </div>
    </footer>
  );
};
