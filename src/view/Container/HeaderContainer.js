import React from "react";
import styled from "styled-components";
import MainHeader from "../Components/Header/MainHeader";

const HeaderContainer = (props) => {

  return(
    <Container>
        <MainHeader/>
    </Container>
  )
}

const Container = styled.div`
`

export default HeaderContainer