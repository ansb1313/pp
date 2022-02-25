import React, {useState} from "react";
import LogoIMG from '../../../images/서울대학교_로고.png'
import styled from "styled-components";

const MenuArray = ["Home", "Publications", "People", "Research", "News & Media", "Contact"]

const MainHeader = (props) => {

    const [menu, setMenu] = useState(false)

    return(
        <Container>
            <Logo>
                <LogoImg>
                    <img src={LogoIMG} alt=""/>
                </LogoImg>
                <LogoText>
                    <h1>서울대학교 심리학과</h1>
                    <p>
                        Seoul National University <br/>
                        Department of Psychology
                    </p>
                </LogoText>
            </Logo>
            <MenuItems>
                {
                    MenuArray.map((item,i) => {
                        return(
                            <MenuItem
                                onMouseOver={()=>{
                                    if(i == 1){
                                        setMenu(true)
                                    }
                                }}
                                onMouseLeave={()=>{
                                    setMenu(false)
                                }}
                            >
                                <span>{item}</span>
                                {
                                    i == 1
                                        &&
                                    <DropDownWrap className={menu == true ? "on" : ""}>
                                        <DropDownItem>
                                            <span>Rethink Stress Interventions</span>
                                        </DropDownItem>
                                        <DropDownItem>
                                            <span>Rethink Stress Interventions</span>
                                        </DropDownItem>
                                        <DropDownItem>
                                            <span>Rethink Stress Interventions</span>
                                        </DropDownItem>
                                        <DropDownItem>
                                            <span>Rethink Stress Interventions</span>
                                        </DropDownItem>
                                    </DropDownWrap>
                                }
                            </MenuItem>
                        )
                    })
                }
            </MenuItems>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 58px 90px 0 90px;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled.div`
    display: flex;
  align-items: center;
  width: 241px;
  height: 68px;
  cursor: pointer;
`
const LogoImg = styled.div`
  img{
    width: 58px;
    display: block;
    margin-right: 10px;
  }  
`
const LogoText = styled.div`
  color: #0741af;

  h1 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 3px;
  }

  p {
    font-size: 13px;
    letter-spacing: 0.5px;
  }

`
const MenuItems = styled.div`
  display: flex;   
  cursor: pointer;
  position: relative;
`
const MenuItem = styled.div`
  margin-right: 30px;
  position: relative;
  transition: all 0.2s;
  height: 100%;
    span{
      font-family: 'Montserrat', sans-serif;      
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: #2F2F30;
    }
  &:hover{
    &::after{
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      display: block;
      height: 1px;
      width: 90%;
      background: #2f2f30;
    }
  }
`
const DropDownWrap = styled.div`
  position: absolute;
  transition: all 0.3s;
  top: calc(100% + 15px);
  box-sizing: border-box;
  padding: 22.62px 20px;
  background: #fff;
  width: 240px;
  border: 0.3px solid rgba(0, 0, 0, 0.4);
  transform: translateY(8px);
  opacity: 0;
  pointer-events: none;
  &.on{
    pointer-events: all;
    transform: none;
    opacity: 1;
  }
  &::after{
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    opacity: 0;
    height: 20px;
    bottom: calc(100% );
    left: 0;
    border: solid 1px #111;
  }
`
const DropDownItem = styled.div`
  margin-bottom: 22.62px;  
  &:last-child{
    margin-bottom: 0!important;
  }
`

export default MainHeader