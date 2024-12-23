import { StripIcon } from '../icons/StripIcon';

export const Strip = () => {
  return (
    <div className="bg-beige w-full flex justify-center items-center">
      <div className="max-w-screen-2xl w-full text-dark-green flex items-center gap-6 md:gap-14 xl:px-12">
        <StripIcon />
        <div>
          <h4 className="md:text-2xl font-semibold">13. ročník</h4>
          <h3 className="md:text-4xl">Zlínský Zámek</h3>
        </div>
      </div>
    </div>
  );
};
