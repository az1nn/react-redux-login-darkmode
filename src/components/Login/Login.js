import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { login, logout } from '../Features/user'

const Container = styled.div`
  width: min-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const ButtonSty = styled.button`
  width: 160px;
  height: 60px;
  font-size: 26px;
  font-weight: bold;
  margin: 20px;
`
const Input = styled.input`
  width: 400px;
  height: 50px;
  font-size: 26px;
  margin: 20px;
  padding-left: 20px;
`

const Login = () => {
  const [userValue, setUserValue] = useState("")
  const [ageValue, setAgeValue] = useState("")
  const [emailValue, setEmailValue] = useState("")

  const dispatch = useDispatch()

  return (
    <Container>
      <div>
        <Input placeholder='user' onChange={(e) => setUserValue(e.target.value)}/>
        <Input placeholder='age' onChange={(e) => setAgeValue(e.target.value)}/>
        <Input placeholder='email' onChange={(e) => setEmailValue(e.target.value)}/>
      </div>
      <ButtonSty onClick={()=> {dispatch(login({user: userValue, age: ageValue, email: emailValue }))}}>LOGIN</ButtonSty>
      <ButtonSty onClick={()=> {dispatch(logout())}}>LOGOUT</ButtonSty>
    </Container>
  )
}

export default Login