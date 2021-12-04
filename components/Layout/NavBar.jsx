import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const mobileScreen = !useMediaQuery('sm');

  useEffect(() => {
    const updateNavBar = () => {
      if (window.scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', updateNavBar);

    return () => {
      window.removeEventListener('scroll', updateNavBar);
    };
  }, []);

  const classes = {
    fixedContainer: `
      fixed
      mt-9
      w-full   
      z-50
      transition
      duration-500
      bg-green-200
      shadow-sm
    `,
    nav: `
      flex
      justify-around
      m-auto 
      items-center 
      align-bottom 
      py-4
    `,
    logoContainer: `
      flex
      items-center
      space-x-2
      select-none
      drag-none
    `,
    productsButton: `
      hidden  
      sm:block
      fixed
      w-28
      h-28
      rounded-full
      py-1
      px-2 
      font-semibold
      transition
      duration-200
      bg-pink-200
      shadow
    `,
    linkList: `
      flex 
      lg:space-x-20 
      space-x-7 
      items-center
      justify-between
    `,
  };

  return (
    <div className={classes.fixedContainer}>
      <nav className={classes.nav}>
        <div className={classes.logoContainer}>
          <div className="w-9">logo/inicio</div>
        </div>
        <motion.button
          className={classes.productsButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0 }}
        >
          Productos
        </motion.button>
        <div>
          <ul className={classes.linkList}>
            {!mobileScreen && (
              <>
                <li>Servicios</li>
                <li>Plant Art</li>
              </>
            )}
            {mobileScreen && <li>menú</li>}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
