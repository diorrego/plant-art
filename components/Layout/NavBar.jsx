import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';
import Logo from './../../public/logoColor.png';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const mobileScreen = useMediaQuery('sm');

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
      w-full
      z-50
      transition
      duration-500
      shadow-sm
    `,
    nav: `
      flex
      flex-row
      justify-around
      items-center
      mt-9
      h-12
      bg-green-200
    `,
    logo: `
      w-28
      rounded-full
      font-semibold
      bg-transparent
    `,
    linkList: `
      flex
      gap-8
    `,
  };

  return (
    <div className={classes.fixedContainer}>
      <nav className={classes.nav}>
        <motion.button
          className={classes.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0 }}
        >
          <Image src={Logo} alt="" />
        </motion.button>
        <ul className={classes.linkList}>
          {mobileScreen && (
            <>
              <li>Productos</li>
              <li>Servicios</li>
              <li>Plant Art</li>
            </>
          )}
          {!mobileScreen && <li>LinksPSPA</li>}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
