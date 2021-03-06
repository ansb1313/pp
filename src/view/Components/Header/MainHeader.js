import React, {useState} from "react";
import LogoIMG from '../../../images/서울대학교_로고.png'
import styled from "styled-components";
import {authService} from '../../../firebase/firebase'
import {useHistory} from "react-router-dom";
import { signOut } from "firebase/auth"

const MenuArray = ["Home", "Publications", "People", "Research", "News & Media", "Contact"];

const MainHeader = (props) => {

    const history = useHistory()
    const userId = window.sessionStorage.getItem("userId")
    const [menu, setMenu] = useState(false);
    const onClickLogout = async () => {
        try {
            const result = await signOut(authService)
                .then((res) => {
                    window.sessionStorage.removeItem("token")
                    window.sessionStorage.removeItem("userId")

                })
                .then((res)=>{
                    history.push("/login")
                })
        }catch (e) {
            console.log('e',e)

        }
    }

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
            <User>
                <span>{userId}</span>
                <span
                    onClick={onClickLogout}
                >Logout</span>
            </User>
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
                                            <DropDownList className={menu == true ? "on" : ""}>
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
                                            </DropDownList>
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
  position: relative;
`
const Logo = styled.div`
    display: flex;
  align-items: center;
  width: 241px;
  height: 68px;
  cursor: pointer;
`
const User = styled.div`
  position: absolute;
  top: 10px;
  right: 120px;
  display: flex;
  align-items: center;

  span {
    &:nth-child(1) {
      color: #757575;
      font-size: 14px;
      margin-right: 20px;
    }

    &:nth-child(2) {
      cursor: pointer;
      font-size: 14px;
      padding: 5px 10px;
      display: block;
      border: solid 1px rgba(117, 117, 117, 0.75);
    }
  }
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
  width: 240px;
  position: absolute;
  z-index: 9999;
  pointer-events: none;
  box-sizing: border-box;
  padding-top: 10px;
  &.on{
    pointer-events: all;
  }
`
const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
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
  //&::after{
  //  position: absolute;
  //  content: "";
  //  display: block;
  //  width: 100%;
  //  opacity: 0;
  //  height: 20px;
  //  bottom: calc(100% );
  //  left: 0;
  //  border: solid 1px #111;
  //}
`
const DropDownItem = styled.div`
  margin-bottom: 22.62px;  
  &:last-child{
    margin-bottom: 0!important;
  }
`

export default MainHeader