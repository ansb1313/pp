import React, {useEffect, useState} from "react";
import subsImg from '../../../images/jeshoots-com-LtNvQHdKkmw-unsplash.jpg'
import styled from "styled-components";

const Section1 = ({ scrollValue }) => {

  const [background, setBackground] = useState(false);
  const [titleColor, setTitleColor] = useState(false)

  useEffect(()=>{
      if(scrollValue >= 840){

          setTimeout(()=>{
              setBackground(true)
              setTimeout(()=>{
                  setTitleColor(true)
              },300)
          })
      }else{
          setBackground(false)
          setTitleColor(false)
      }
  },[scrollValue])

  return(
    <Container className={background ? "on" : ""}>
      <ImgBox>
        <img src={subsImg} alt=""/>
      </ImgBox>
        <TextArea>
          <TextItems  className={titleColor ? "on" : ""}>
          <span className={"title"}>Contact Us</span>
          <p>
              Lorem ipsum dolor sit amet,
          </p>
          <span className={"subs"}>
              consectetur adipisicing elit.
          </span>
          <span className={"button"}>
              More
          </span>
          </TextItems>
        </TextArea>
    </Container>
  )
}

export default Section1

const Container = styled.div`
  padding: 110px 103px;
  display: flex;
  //transform: translateY(100px);
  opacity: 0;
  transition: all 0.6s;
  &.on{
    //transform: none;
    opacity: 1;
  }
`
const ImgBox = styled.div`
  width: 57%;  
  background: #333;
  height: 300px;
  transform: translateX(-140px);
  transition: all 0.5s;
  .on &{
    transform: none;
  }
  img{
    opacity: 0.7;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`
const TextArea = styled.div`
  background: rgb(101, 219, 156);
  transition: all 0.3s;
  width: 43%;
  display: flex;
  justify-content: center;
  align-items: center;;
`
const TextItems = styled.div`
  color: rgb(101, 219, 156);;
  transition: all 0.3s;
  &.on{
    color:#fff;
  }
  .title{
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 15px;
    display: block;
  }  
  .subs{
    font-weight: bold;
    font-size: 28px;
    margin-top: 5px;
    display: block;
  }
  p{
    font-size: 28px;
  }
  .button{
    cursor: pointer;
    padding: 10px;
    width: 100px;
    font-weight: bold;
    text-align: center;
    border: solid 2px #fff;
    margin-top: 20px;
    display: block;
  }
  
`