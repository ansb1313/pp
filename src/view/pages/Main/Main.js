import React from 'react';
import styled from 'styled-components';
import Header from "../Header";
import MainContainer from "../../Container/MainContainer";

const Main = () => {

    return(

        <Container>
            <Header />
            <MainContainer/>
        </Container>

    )

}

const Container = styled.div`
  background: #F7EFE5;
  height: 100%;
  width: 100%;
`

export default Main;