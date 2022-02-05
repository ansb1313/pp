import React, {useEffect, useState} from "react";
import contactImg from "./../../../images/jeshoots-com-LtNvQHdKkmw-unsplash.jpg"
import styled from "styled-components";

const News = ({scrollValue}) => {

  const [scroll, setScroll] = useState(false)

  useEffect(()=>{
    if(scrollValue >= 1400){
      setScroll(true)
    }else{
      setScroll(false)
    }
  },[scrollValue])

  return(
    <Container>
      <Wrap className={scroll ? "on" : ""}>
        <Title>
          <span>News</span>
          <h4>Lorem Ipsum News</h4>
        </Title>

        <Contents>
          <Item>
            <span className={"top"}>Lorem</span>
            <span className={"title"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aperiam aut deserunt
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aperiam aut deserunt
            </p>
            <span className={"date"}>
            2022-01-01
          </span>
          </Item>

          <Item>
            <span className={"top"}>Lorem</span>
            <span className={"title"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aperiam aut deserunt
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aperiam aut deserunt
            </p>
            <span className={"date"}>
            2022-01-01
          </span>
          </Item>

          <Item>
            <span className={"top"}>Lorem</span>
            <span className={"title"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aperiam aut deserunt
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aperiam aut deserunt
            </p>
            <span className={"date"}>
            2022-01-01
          </span>
          </Item>
        </Contents>
      </Wrap>

    </Container>
  )
}

export default News

const Container = styled.div`
  background: #fff;
  padding: 90px 103px 126px 103px ;
 
`
const Wrap = styled.div`
  transition: all 0.4s;
  transform: translateY(100px);
  opacity: 0;
  &.on{
    opacity: 1;
    transform: none;
  }
`
const Title = styled.div`
  margin-bottom: 30px;
  span {
    font-size: 18px;
    font-weight: bold;
    color: rgb(95, 210, 148);
    margin-bottom: 10px;
    display: block;
  }
  h4{
    color: #222;
    font-size: 38px;
    font-weight: bold;
    font-family: "Apple LiGothic";
  }
`
const Contents = styled.div`
    display: flex;
`
const Item = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 35px;
  display: flex;
  flex-direction: column;
  background: rgb(248, 249, 250);
  width: 32%;
  margin-right: 2%;
  border-radius: 15px;
  line-height: 1.2;
  transition: all 0.3s;
  &:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  p{
    font-family: "Apple LiGothic";
  }
  span{
    width: 100%;;
  }
  &:nth-last-child{
    margin-right: 0;
  }
  .top{
    color: rgb(95, 210, 148);
    font-weight: bold;
    margin-bottom: 10px;
  }  
  .title{
    color: #222;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .date{
    font-size: 12px;
    color: #ddd;
    margin-top: 20px;
  }
`
