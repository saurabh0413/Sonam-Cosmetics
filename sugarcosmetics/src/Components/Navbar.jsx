import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={"aldsnf"} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink  activeStyle>
            About
          </NavLink>
          <NavLink  activeStyle>
            Services
          </NavLink>
          <NavLink  activeStyle>
            Contact Us
          </NavLink>
          <NavLink  activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export { Navbar};