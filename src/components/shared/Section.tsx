import clsx from 'clsx';
import type { ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
  title?: string;
  className?: string;
  background?: string;
  headlineClassName?: string;
  noPXDesktop?: boolean;
  noPXMobile?: boolean;
}

export const Section = ({
  id,
  children,
  title,
  className,
  headlineClassName,
  noPXDesktop,
  noPXMobile,
}: Props) => {
  return (
    <section
      id={id}
      className={clsx(
        'flex flex-col w-full items-center py-12 lg:py-16',
        noPXDesktop ? '' : 'lg:px-20 xl:px-24',
        noPXMobile ? '' : 'px-4',
        className,
      )}
    >
      <div className={clsx('w-full', noPXDesktop ? '' : 'max-w-screen-2xl')}>
        {title && (
          <h2 className={`mb-8 xl:mb-12 ${headlineClassName}`}>{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
};
