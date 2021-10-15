import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='lessons' onClick={toggle}>Lessons</SidebarLink>
          <SidebarLink to='methodology' onClick={toggle}>Methodology</SidebarLink>
          <SidebarLink to='testimonials' onClick={toggle}>Testimonials</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/contact'>Contact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar