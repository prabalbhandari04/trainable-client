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
  DropSide
} from './Navbar.elements';
import {useSelector} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const auth = useSelector(state => state.auth)
  const {user, isLogged} = auth
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleLogout = async () => {
      try {
          await axios.get('/user/logout')
          localStorage.removeItem('firstLogin')
          window.location.href = "/";
      } catch (err) {
          window.location.href = "/";
      }
  }

    const userLink = () => {
      return <Dropdown>
          <Dropdown><Link to="/dash"><Button primary>DashBoard</Button></Link></Dropdown>
          <Dropdown><Button onClick={handleLogout} primary>Logout</Button></Dropdown>
          
      </Dropdown>
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
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  Products
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {
                    isLogged
                    ? userLink()
                    :<NavBtnLink to='/login'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                }
              </NavItemBtn>
              {/* <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/login'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/login'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn> */}
            
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
