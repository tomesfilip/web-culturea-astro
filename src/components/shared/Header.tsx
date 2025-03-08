import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Twirl as Hamburger } from "./hamburger";

import { menuItems } from "../../data/menuItems";
import { LogoLink } from "../header/LogoLink";
import { MenuLink } from "../header/MenuLink";
import { TicketButton } from "../header/TicketButton";

interface Props {
  path?: string;
}

export const Header = ({ path }: Props) => {
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
        {/* Desktop Logo */}
        <div className="hidden xl:block pr-8">
          <LogoLink />
        </div>

        {/* Mobile Layout: Logo, TicketButton, and Hamburger */}
        <div className="z-20 flex w-full justify-between items-center p-4 xl:hidden">
          <LogoLink />
          <div className="ml-auto pl-2 mr-2">
            <TicketButton />
          </div>
          <Hamburger rounded toggled={isOpen} toggle={setIsOpen} color="beige" />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <AnimatePresence>
            <motion.ul
              className="flex flex-col items-center justify-center text-beige gap-y-6 xl:hidden absolute pt-20 pb-10 w-full bg-dark-green min-h-[38vh]"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {menuItems.map((menuItem) => (
                <motion.li key={menuItem.title} variants={menuVariants} onClick={() => setIsOpen(false)}>
                  <MenuLink currPath={path} {...menuItem} />
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        )}

        {/* Desktop Menu */}
        <ul className="flex-row items-center hidden space-x-8 xl:flex text-beige">
          {menuItems.map((menuItem) => (
            <motion.li key={menuItem.title} onClick={() => setIsOpen(false)}>
              <MenuLink currPath={path} {...menuItem} />
            </motion.li>
          ))}
          <TicketButton />
        </ul>
      </nav>
    </motion.header>
  );
};
