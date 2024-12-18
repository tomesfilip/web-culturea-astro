import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Twirl as Hamburger } from './hamburger';

import { menuItems } from '../../data/menuItems';
import { LogoLink } from '../header/LogoLink';
import { MenuLink } from '../header/MenuLink';
import { TicketButton } from '../header/TicketButton';

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
    <motion.header className="w-full flex justify-center bg-transparent fixed top-0 bg-blue-1 z-20">
      <nav className="relative z-10 max-w-screen-2xl w-full flex flex-col items-center h-24 xl:flex-row xl:justify-between xl:py-4 xl:px-12 ">
        <div className="hidden xl:block">
          <LogoLink />
        </div>
        <div className="z-20 flex w-full justify-between items-center pt-4 px-4 xl:hidden">
          <LogoLink />
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setIsOpen}
            color="white"
          />
        </div>
        {isOpen && (
          <AnimatePresence>
            <motion.ul
              className="flex flex-col items-center justify-center text-white gap-y-6 xl:hidden absolute w-full h-[62vh]"
              style={{
                background:
                  'linear-gradient(145deg, rgba(254,129,51,1) 20%, rgba(25,119,122,1) 80%)',
              }}
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
        <ul className="flex-row items-center hidden space-x-8 xl:flex text-white">
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
