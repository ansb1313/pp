import React, {useEffect} from "react";
import styled from "styled-components";
import {FaConnectdevelop} from "@react-icons/all-files/fa/FaConnectdevelop";
import {AiOutlineFileSearch} from "@react-icons/all-files/ai/AiOutlineFileSearch";
import {BiNetworkChart} from "@react-icons/all-files/bi/BiNetworkChart";
import {GrContactInfo} from "@react-icons/all-files/gr/GrContactInfo";

const iconArr = [
    <FaConnectdevelop size={70} />,
    <GrContactInfo size={70} />,
    <AiOutlineFileSearch size={70} />,
    <BiNetworkChart size={70} />
]
const iconName=["Core Value", "Vision", "Research", "Network"]

const About = ({scrollValue}) => {

  return(
    <Container>
      <Wrap className={ scrollValue >= 230 ? "on" : ""} >
          <Title>
              <h4>Lorem About Title</h4>
          </Title>
          <ItemWrap>
            {
                iconArr.map((item, i) => (
                    <Item>
                        {item}
                        <TextArea>
                            <span>{iconName[i]}</span>
                            <p>
                                Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit.
                            </p>
                        </TextArea>

                    </Item>
                ))
            }
          </ItemWrap>
      </Wrap>
    </Container>  
  )  
}

export default About

const Container = styled.div`
    background: #fff;
  box-sizing: border-box;
  padding: 100px 103px;
  overflow: hidden;

`
const Wrap = styled.div`
  transition: all 0.6s;
  transform: translateY(80px);  
  opacity: 0;
  &.on{
    opacity: 1;
    transform: none;
  }
`
const ItemWrap = styled.div`
    display: flex;
  justify-content: center;
`
const Item = styled.div`
  //#7ab5c7
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  svg{
   
    //transform: scale(5);
    //fill: #7ab5c7;
    fill:rgb(101, 219, 156);

    path{
      //stroke: #7ab5c7;
      stroke: rgb(101, 219, 156);;
    }
  }
`
const Title = styled.div`
  font-size: 50px;
  text-align: center;
  font-family: "Apple SD Gothic Neo";
  font-weight: bold;
  color: #191919;
  margin-bottom: 50px;
`
const TextArea = styled.div`
   margin-top: 20px; 
  text-align: center;
  color: #222;

  span{
    text-align: center;
    font-family: "Apple LiGothic";
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 30px;
    display: block;
    margin-bottom: 20px;
  }
  p{
    font-family: "Apple SD Gothic Neo";
    font-size: 16px;
    line-height: 1.2;
    font-weight: bold;
  }
`
const More = styled.div`
    margin-top: 40px;
`