import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }

  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            COLLAB
            <img className='navbar-logo-img' src="/images/Collab-logos_white-notext.png" alt='logo' width='54px' height='44px' padding-left='5px'  />
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/updates'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Updates
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/ideas'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Ideas
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </NavLink>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline' type={undefined} onClick={undefined} buttonSize={undefined} className="block">Sign-up</Button>} */}
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;