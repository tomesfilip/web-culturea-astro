import type { ReactNode } from 'react';

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const ActionButton = ({ onClick, children }: Props) => {
  return (
    <button
      className="px-2 py-1 my-2 outline-none border-[1px] border-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
