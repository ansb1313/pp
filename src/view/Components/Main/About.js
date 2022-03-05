import React, {useEffect} from "react";
import styled from "styled-components";

const About = (props) => {

  useEffect(()=>{
      document.addEventListener('scroll',()=>{
          console.log('window.scrollY',window.scrollY)
      })
  },[]);

  return(
    <Container>
     <Contents>
         <Left>
            <LeftContents>
                <h1>Lorem</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    molestias non nulla perferendis perspiciatis quas sapiente soluta tempora ullam, vitae!</p>
            </LeftContents>
         </Left>
         <Right>
             <RightContents>
                 <h1>Lorem</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     molestias non nulla perferendis perspiciatis quas sapiente soluta tempora ullam, vitae!</p>
             </RightContents>
             <RightContents>
                 <h1>Lorem</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     molestias non nulla perferendis perspiciatis quas sapiente soluta tempora ullam, vitae!</p>
             </RightContents>
             <RightContents>
                 <h1>Lorem</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     molestias non nulla perferendis perspiciatis quas sapiente soluta tempora ullam, vitae!</p>
             </RightContents>
             <RightContents>
                 <h1>Lorem</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     molestias non nulla perferendis perspiciatis quas sapiente soluta tempora ullam, vitae!</p>
             </RightContents>
             <RightContents>
                 <h1>Lorem</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     molestias non nulla perferendis perspiciatis quas sapiente soluta tempora ullam, vitae!</p>
             </RightContents>
             <RightContents>
                 <h1>Lorem</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     molestias non nulla perferendis perspiciatis quas sapiente soluta tempora ullam, vitae!</p>
             </RightContents>

         </Right>
     </Contents>

    </Container>  
  )  
}

export default About;

const Container = styled.div`
  padding: 100px 0;
  margin-top: 100px;
  position: relative;
  display: flex;
  //background: #fff;
  justify-content: center;
`
const Contents = styled.div`
  display: flex;  
  width: 1200px;
  position: relative;
`
const Left = styled.div`
  width: 50%;
  height: 100vh;
  max-height: 600px;
  display: flex;
  align-items: center;
  position: sticky;
  top: calc(50% - 300px);
`
const Right = styled.div`
  width: 50%;
  position: relative;
`
const RightContents = styled.div`
  h1{
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
  }
  p{
    display: block;
    line-height: 1.2;
  }
   margin-bottom: 200px; 
`
const LeftContents = styled.div`
  box-sizing: border-box;
  padding: 100px;
`