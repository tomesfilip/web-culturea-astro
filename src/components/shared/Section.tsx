import type { ReactNode } from 'react';

type Props = {
  sectionId: string;
  sectionName?: string;
  children: ReactNode;
  className?: string;
  background?: string;
  headlineClassName?: string;
};

export const Section = ({
  sectionId,
  sectionName,
  children,
  className,
  background,
  headlineClassName,
}: Props) => {
  return (
    <section
      id={sectionId}
      className={`flex flex-col items-center xl:px-12 my-12 ${className}`}
      style={{
        background: background ? `url(${background})` : '',
        backgroundSize: 'cover',
      }}
    >
      {sectionName && (
        <h2 className={`text-center mb-8 xl:mb-12 ${headlineClassName}`}>
          {sectionName}
        </h2>
      )}
      {children}
    </section>
  );
};
