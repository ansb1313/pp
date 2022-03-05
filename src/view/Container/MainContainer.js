import React, {useEffect} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import HeaderContainer from "./HeaderContainer";
import Main from "../Components/Main/Main";
import News from "../Components/Main/News";
import About from "../Components/Main/About";

const MainContainer = (props) => {

    const token = window.sessionStorage.getItem("token")
    const history = useHistory();

    useEffect(()=>{
        if(token == null){
            history.push("/login")
        }
    },[token])

    return(
    <Container>
      <HeaderContainer/>
      <Main />
      <About/>
      <News />
    </Container>
  )
}

const Container = styled.div`
`

export default MainContainer