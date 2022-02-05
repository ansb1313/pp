import React from "react";
import styled from "styled-components";

const menuItemArr = ["TEAM", "ABOUT", "PLAN", "NEWS", "CONTACT"]

const HeaderContainer = (props) => {

  return(
    <Container>
        <Logo>
            <h1>
                LOGO , 상호 ...
            </h1>
        </Logo>
        <MenuWrap>
            <MenuItems>
                {
                    menuItemArr.map(item => (
                        <MenuItem>{item}</MenuItem>
                    ))
                }
            </MenuItems>
        </MenuWrap>

    </Container>
  )
}

export default HeaderContainer

const Container = styled.div`
  position: fixed;
  
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  box-sizing: border-box;
  padding: 0 103px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(27, 31, 35, 0.04) 0px 2px 2px, rgba(255, 255, 255, 0.25) 0px 3px 0px inset;
`
const Logo = styled.div`
  font-size: 30px;
  color: #ccc;
  font-weight: bold;
`
const MenuWrap = styled.div`
    
`
const MenuItems = styled.div`
  display: flex;  
`
const MenuItem = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  color: rgba(68, 68, 68, 0.8);
  letter-spacing: -.5px;
  padding: 20px;
`