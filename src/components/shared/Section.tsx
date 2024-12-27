import type { ReactNode } from 'react';

type Props = {
  id: string;
  children: ReactNode;
  title?: string;
  className?: string;
  background?: string;
  headlineClassName?: string;
};

export const Section = ({
  id,
  children,
  title,
  className,
  headlineClassName,
}: Props) => {
  return (
    <section
      id={id}
      className={`flex flex-col w-full items-center py-12 lg:py-16 px-4 lg:px-20 xl:px-24 ${className}`}
    >
      <div className="w-full max-w-screen-2xl">
        {title && (
          <h2 className={`mb-8 xl:mb-12 ${headlineClassName}`}>{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
};
