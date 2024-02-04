import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const Backdrop = ({ onClick, children }: Props) => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-70 flex justify-center items-center z-30 overflow-y-hidden"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
