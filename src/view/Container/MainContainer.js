import React, {useEffect, useState} from "react";
import mainImg from '../../images/cam-fattahi-Hr1VRgZov-U-unsplash.jpg'
import styled from "styled-components";
import MainContents from "../Components/Main/MainContents";
import About from "../Components/Main/About";
import Section1 from "../Components/Main/Section1";
import News from "../Components/Main/News";
import Footer from "../Components/Main/Footer";

const MainContainer = ({scrollValue}) => {

  const [leftBox, setLeftBox] = useState(false);
  const [mainCont, setMainCont] = useState(false);

  useEffect(()=>{
      setTimeout(()=>{
          setLeftBox(true)

          setTimeout(()=>{
              setMainCont(true)
          },700)
      },)
  },[])
    
  return(
    <Container>
        <Wrap bg={mainImg}>
            <img src={mainImg} />
            <Left className={leftBox ? "on" : ""} />
            <MainContents mainCont={mainCont} />
        </Wrap>
        <About scrollValue={scrollValue} />
        <Section1 scrollValue={scrollValue} />
        <News scrollValue={scrollValue} />
        <Footer scrollValue={scrollValue} />
    </Container>  
  )  
}

export default MainContainer

const Container = styled.div`
  
`
const Wrap = styled.div`
  height: 750px;
  background-image: url(${props => props.mainImg});
  position: relative;
  overflow: hidden;
    img{
      z-index: 0;
      position: absolute;
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
     
    }
`
const Left = styled.div`

  background: rgba(38, 131, 82, 0.52);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  transition: all 0.75s;
  width: 43%;
  transform: translateX(-100%);

  &.on {
    transform: none;
    opacity: 1;
  }
`