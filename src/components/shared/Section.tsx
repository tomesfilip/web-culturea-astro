import type { ReactNode } from 'react';

type Props = {
  sectionId: string;
  children: ReactNode;
  sectionName?: string;
  className?: string;
  background?: string;
  headlineClassName?: string;
};

export const Section = ({
  sectionId,
  children,
  sectionName,
  className,
  headlineClassName,
}: Props) => {
  return (
    <section
      id={sectionId}
      className={`flex flex-col items-center my-12 lg:my-16 ${className}`}
    >
      {sectionName && (
        <h2 className={`text-center mb-8 xl:mb-12 ${headlineClassName}`}>
          {sectionName}
        </h2>
      )}
      <div className="w-full max-w-screen-2xl mx-auto">{children}</div>
    </section>
  );
};
