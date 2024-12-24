import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Twirl as Hamburger } from './hamburger';

import { menuItems } from '../../data/menuItems';
import { LogoLink } from '../header/LogoLink';
import { MenuLink } from '../header/MenuLink';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.header className="w-full flex justify-center bg-dark-green fixed top-0 z-20">
      <nav className="relative z-10 max-w-screen-2xl w-full flex flex-col items-center xl:flex-row xl:justify-between xl:py-4 xl:px-12">
        <div className="hidden xl:block">
          <LogoLink />
        </div>
        <div className="z-20 flex w-full justify-between items-center p-4 xl:hidden">
          <LogoLink />
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setIsOpen}
            color="beige"
          />
        </div>
        {isOpen && (
          <AnimatePresence>
            <motion.ul
              className="flex flex-col items-center justify-center text-beige gap-y-6 xl:hidden absolute w-full bg-dark-green h-[32vh]"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {menuItems.map((menuItem) => (
                <motion.li
                  key={menuItem.title}
                  variants={menuVariants}
                  onClick={() => setIsOpen(false)}
                >
                  <MenuLink {...menuItem} />
                </motion.li>
              ))}
              {/* <motion.li variants={menuVariants} className="mt-6">
                <TicketButton />
              </motion.li> */}
            </motion.ul>
          </AnimatePresence>
        )}
        <ul className="flex-row items-center hidden space-x-8 xl:flex text-beige">
          {menuItems.map((menuItem) => (
            <motion.li key={menuItem.title} onClick={() => setIsOpen(false)}>
              <MenuLink {...menuItem} />
            </motion.li>
          ))}
          {/* <TicketButton /> */}
        </ul>
      </nav>
    </motion.header>
  );
};
