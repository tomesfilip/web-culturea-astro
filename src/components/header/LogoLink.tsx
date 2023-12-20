const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

const LogoLink = () => {
  return (
    <a className="logo" href="/">
      <h1 className="hidden">Culturea {getCurrentYear()}</h1>
      <img
        src="./logo_slovo.svg"
        alt={`culturea ${getCurrentYear()} logo`}
        width={200}
        height={46}
      />
    </a>
  );
};

export default LogoLink;
