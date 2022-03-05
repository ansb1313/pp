import React, {useState} from "react";
import LogoImg from '../../../images/logo.png'
import styled from "styled-components";

const Login = (props) => {

  const [user, setUser] = useState({
      userId:"",
      password:""
  });

  const onChange = (e, type) => {
      const value = e.target.value;
      setUser({
          ...user,
          [type]:value
      })
  }

  return(
    <Container>
        <Contents>
            <Logo>
                <img src={LogoImg} />
            </Logo>
            <InputArea>
               <InputItem>
                   <span>email</span>
                   <input type={"text"} value={user.userId} onChange={(e)=>{onChange(e, "userId")}} />
               </InputItem>
                <InputItem>
                    <span>password</span>
                    <input type={"text"} value={user.password} onChange={(e)=>{onChange(e, "password")}}/>
                </InputItem>
            </InputArea>
            <Button>
                로그인
            </Button>
            <Button>
                회원가입
            </Button>
        </Contents>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  background: #f9f8f8;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Contents = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  height: 500px;
  border-radius: 8px;
  box-sizing: border-box;
  padding-top: 60px;
  padding-left: 40px;
  padding-right: 40px;
`
const Logo = styled.div`
  margin-bottom: 50px;   
`
const InputArea = styled.div`
  width: 100%;  
`
const InputItem = styled.div`
  margin-bottom: 20px;

  &:nth-child(2){
    margin-bottom: 30px;
  }
  
  span {
    display: block;
    margin-bottom: 5px;
    color: rgba(107, 110, 111, 0.75);
  }

  input {
    display: block;
    border-radius: 6px;
    width: 100%;
    height: 36px;
    border: solid 1px rgba(207, 203, 203, 0.85);
    box-sizing: border-box;
    padding: 5px 10px;
  }
`
const Button = styled.span`
  width: 100%;
  background: #4f80ff;
  border-radius: 6px;
  height: 36px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
  cursor: pointer;
`
