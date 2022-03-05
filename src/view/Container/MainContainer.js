import React from "react";
import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";
import Main from "../Components/Main/Main";
import News from "../Components/Main/News";
import About from "../Components/Main/About";

const MainContainer = (props) => {

  return(
    <Container>
      <HeaderContainer/>
      <Main />
      <About />
      <News />
    </Container>
  )
}

const Container = styled.div`
`

export default MainContainer