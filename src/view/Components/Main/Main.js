import React from "react";
import styled from "styled-components";
import {MainIcon} from "../../../icons/icons";

const Main = (props) => {

  return(
    <Container>
      <Title>
        <h4>
          Social Psychology Laboratory
        </h4>
      </Title>
      <MainContents>
          {MainIcon()}
      </MainContents>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 346px;
  align-items: center;
`
const Title = styled.div`
  margin-bottom: 150px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 88px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #2F2F30;
`
const MainContents = styled.div`
    
`

export default Main