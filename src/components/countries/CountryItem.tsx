import { Logo } from '../icons/Logo';

interface Props {
  img: string;
  alt: string;
  headline: string;
  text: string;
}

export const CountryItem = ({ img, alt, headline, text }: Props) => {
  return (
    <div className="grid lg:grid-cols-2 gap-x-28 items-center">
      <img
        src={img}
        alt={alt}
        width={902}
        height={980}
        className="w-full aspect-[902/980] object-cover order-2 lg:order-1"
      />
      <div className="flex flex-col justify-between h-full lg:py-8 xl:py-24 order-1 lg:order-2">
        <div className="flex gap-6 items-center">
          <Logo />
          <h4 className="text-5xl font-bold">{headline}</h4>
        </div>
        <p className="max-w-[540px]">{text}</p>
      </div>
    </div>
  );
};
