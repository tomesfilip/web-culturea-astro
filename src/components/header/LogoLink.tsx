import { CULTUREA_YEAR } from "../../lib/constants";

const LogoLink = () => {
  return (
    <a className="logo" href="/">
      <h1 className="hidden">Culturea {CULTUREA_YEAR}</h1>
      <img
        src="./logo_slovo.svg"
        alt={`culturea ${CULTUREA_YEAR} logo`}
        width={200}
        height={46}
      />
    </a>
  );
};

export default LogoLink;
