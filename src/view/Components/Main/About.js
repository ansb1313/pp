import React, {useEffect, useState} from "react";
import styled from "styled-components";

const About = (props) => {

  const [on, setOn] = useState(0)

  useEffect(()=>{
      document.addEventListener('scroll',()=>{
          console.log('window.scrollY',window.scrollY)
          if(window.scrollY >= 2000){
              setOn(1);
          }else{
              setOn(0)
          }
      })

  },[]);
  
  console.log('on',on)

  return(
    <Container>
     <Contents>
         <Left>
            <LeftContents className={on == 1 ? "on" : ""}>
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
  transition: all 0.3s;
  h1{
    transition: all 0.3s;
    margin-bottom: 0px;
    font-weight: normal;
  }
  p{
    transition: all 0.3s;
    font-weight: normal;
    line-height: 1;
  }
  &.on{
    h1{
      margin-bottom: 20px;
      font-weight: bold;
    }
    p{
      font-weight: bold;
      line-height: 1.4;
    }
  }
`
const LeftBox = styled.div`
    
`