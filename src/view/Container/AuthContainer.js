import React from "react";
import styled from "styled-components";
import Login from "../Components/LoginTemplate/Login";

const AuthContainer = (props) => {

  return(
    <Container>
      <Login/>
    </Container>
  )
}

export default AuthContainer

const Container = styled.div`
    
`
