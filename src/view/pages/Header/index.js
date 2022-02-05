import React from "react";
import styled from "styled-components";
import HeaderContainer from "../../Container/HeaderContainer";

const Header = (props) => {

  return(
    <Container>
        <HeaderContainer />
    </Container>
  )
}

export default Header

const Container = styled.div`
  box-sizing: border-box;
`