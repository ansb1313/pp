import React from "react";
import styled from "styled-components";

const Footer = (props) => {
    
  return(
    <Container>
        <h1>Footer</h1>
    </Container>  
  )  
}

export default Footer

const Container = styled.div`
  background: #333;
  height: 340px;
  color: #fff;
  h1{
    display: block;
    padding: 103px;
  }
`