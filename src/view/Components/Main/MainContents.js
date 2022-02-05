import React from "react";
import styled from "styled-components";

const MainContents = ({mainCont}) => {
    
  return(
    <Container>
        <TextArea className={mainCont ? "on" : ""}>
          <h4>Title Lorem ipsum</h4>
          <p><span>Lorem ipsum dolor sit amet,</span> consectetur elit.</p>
          <span className={"contents"}>
              Lorem ipsum dolor sit amet<br/>
              consectetur adipisicing elit. Consectetur culpa
          </span>
          <span className={"button"}>
              Lorem News
          </span>
          <div className={"border"} />
        </TextArea>
    </Container>  
  )  
}


const Container = styled.div`
  box-sizing: border-box;
  padding: 0 103px;
  position: relative;
`

const TextArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translateX(-60%);
  top: 180px;
  width: 658px;
  box-sizing: border-box;
  padding-top: 45px;
  padding-left: 30px;
  padding-bottom: 45px;
  border: solid 10px rgba(255, 255, 255, 0.55);
  //border-left: none !important;
  transition: all 0.45s;
  opacity: 0;
  &.on{
    opacity: 0.8;
    transform: translateX(-50%);
  }
  
  h4 {
    font-size: 42px;
    margin-bottom: 20px;
    //color: rgba(46, 91, 221, 0.85);
    color: #fff;
    font-family: "Apple LiGothic";
  }

  p {
    display: block;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;

    span {
      font-weight: bold;
      color: #ffe349;
      font-size: 28px;
    }
  }

  .contents {
    font-size: 20px;
    color: #fff;
    line-height: 1.4;
    margin-bottom: 24px;
  }

  .button {
    cursor: pointer;
    display: block;
    border: solid 2px #fff;
    width: 180px;
    font-size: 20px;
    color: #fff;
    letter-spacing: 1px;
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
    font-family: "Apple LiGothic";
  }

  .border {
    width: 70px;
    background: #ffe349;
    margin-top: 30px;
    height: 2px;

  }
  
`

export default MainContents

