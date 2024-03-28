import React, { useState } from 'react';
import OverlayMenu from '../OverlayMenu/OverlayMenu';
import Hamburger from '../Hamburger/Hamburger';
import Footer from '../Footer/Footer';

import { GlobalStyles, Primary } from './Layout.styles';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <GlobalStyles />

      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />

      <Primary>{children}</Primary>
      <Footer />
    </>
  );
};

export default Layout;
