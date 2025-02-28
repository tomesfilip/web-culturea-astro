import { StripIcon } from '../icons/StripIcon';

export const Strip = () => {
  return (
    <div className="bg-beige w-full flex justify-center items-center">
      <div className="max-w-screen-2xl w-full text-dark-green flex items-center gap-6 md:gap-14 xl:px-12">
        <StripIcon />
        <div>
          <h1 className="text-lg md:text-2xl font-semibold">13. ročník</h1>
          <h1 className="text-2xl md:text-4xl font-semibold">Zlínský Zámek</h1>
        </div>
      </div>
    </div>
  );
};
