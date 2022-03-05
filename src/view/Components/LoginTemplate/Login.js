import React, {useState} from "react";
import LogoImg from '../../../images/logo.png'
import {useHistory} from "react-router-dom"
import styled from "styled-components";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import {authService} from "../../../firebase/firebase";

const Login = (props) => {

  const history = useHistory()
  const [user, setUser] = useState({
      userId:"",
      password:""
  });

  const [message, setMessage] = useState(false)

  const onChange = (e, type) => {
      const value = e.target.value;
      setUser({
          ...user,
          [type]:value
      })
  }

  const onClickJoin = async () => {
      try {
          const result = await createUserWithEmailAndPassword(authService, user.userId, user.password)
              .then((res)=>{
                  setTimeout(()=>{
                      setMessage(true);
                      setTimeout(()=>{
                          setMessage(false)
                      },1000)
                  })

              })

      }catch (e) {
          console.log('e',e)
      }
  }

  const onClickLogin = async () => {
      try {
          const result = await signInWithEmailAndPassword(authService, user.userId, user.password)
              .then((res) => {
                  console.log('res',res, res._tokenResponse);
                  const token = window.sessionStorage.setItem('token', res._tokenResponse.idToken)
                  window.sessionStorage.setItem('userId', res.user.email)
                  if(token !== null){
                      history.push("/")
                  }
              })
      }catch (e) {
          console.log('e',e)
      }
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
                    <input type={"password"} value={user.password} onChange={(e)=>{onChange(e, "password")}}/>
                </InputItem>
            </InputArea>
            <Button onClick={onClickLogin}>
                로그인
            </Button>
            <Button
                onClick={onClickJoin}
            >
                회원가입
            </Button>
            <Join className={message == true ? "on" : ""}>
                <span>회원가입이 완료되었습니다.</span>

            </Join>
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
  position: relative;
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
    color: rgba(107, 110, 111, 1);
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
const Join = styled.div`
  background: rgba(23, 23, 23, 0.8);
  position: absolute;
  padding: 20px;
  border-radius: 6px;
  top: 40%;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  &.on{
    pointer-events: all;
    opacity: 1;
  }
  span{
    color: #fff;
    font-size: 12px;
  }
`