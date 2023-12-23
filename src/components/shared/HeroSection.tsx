import type { ReactNode } from 'react';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export const HeroSection = ({ children }: Props) => {
  return (
    <div className="bg-[url('/pozadi/landing-mobile.jpg')] bg-cover bg-center bg-no-repeat w-full h-full">
      <Header />
      {children}
    </div>
  );
};
