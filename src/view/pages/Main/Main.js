import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from "../Header";
import MainContainer from "../../Container/MainContainer";

const Main = () => {
    const [scrollValue, setScrollValue] = useState(0)

    useEffect(()=>{
        document.addEventListener('scroll', ()=>{

            setScrollValue(window.scrollY)
        })
    },[]);
    
    console.log('scrollValue',scrollValue)

    return(

        <Container>
            <Header />
            <MainContainer scrollValue={scrollValue} />
        </Container>

    )

}

const Container = styled.div`
  background: rgba(249,249,249);
  flex: 1;
`

export default Main;