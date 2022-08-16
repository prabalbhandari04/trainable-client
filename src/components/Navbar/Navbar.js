import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  Dropdown,
  DropSide,
  NavProfile
} from './Navbar.elements';
import {useSelector} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import AdminNavbar from  '../Navbars/AdminNavbar'
import './Navbar.css'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const auth = useSelector(state => state.auth)
  const {user, isLogged} = auth
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const notifySucess = () => toast.success('Logout Succesful.');

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  

    const userLink = () => {
      return <NavProfile>
      <AdminNavbar />
      </NavProfile>
  }

 

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              TRAINBLE
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem  >
                <NavLinks  to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem> 
              <NavItem  >
                <NavLinks to='/services' onClick={closeMobileMenu}>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem  >
                <NavLinks to='/services' onClick={closeMobileMenu}>
                  Contact Us
                </NavLinks>
              </NavItem>
              <NavItem  >
                <NavLinks to='/login' onClick={closeMobileMenu}>
                  Job Seekers
                </NavLinks>
              </NavItem>
              <NavItem   >
                <NavLinks  to='/recruiter/login' onClick={closeMobileMenu}>
                  Recruiter
                </NavLinks>
              </NavItem>
               <NavItemBtn>
                {
                    isLogged
                    ? userLink()
                    :<NavBtnLink to='/'>
                    
                  </NavBtnLink>
                }
              </NavItemBtn>
              
            
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
