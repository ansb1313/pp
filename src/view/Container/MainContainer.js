import React from "react";
import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";
import Main from "../Components/Main/Main";
import News from "../Components/Main/News";

const MainContainer = (props) => {

  return(
    <Container>
      <HeaderContainer/>
      <Main />
      <News />
    </Container>
  )
}

const Container = styled.div`
`

export default MainContainer