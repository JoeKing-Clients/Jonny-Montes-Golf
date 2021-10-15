import React from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements'



const Navbar = ({toggle}) => {
  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' >Jonny Montes Golf</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/lessons'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Lessons</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/methodology'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Methodology</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/testimonials'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Testimonials</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/contact'>Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar