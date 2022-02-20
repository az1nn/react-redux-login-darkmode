import React from 'react'
import { useSelector } from 'react-redux' 
import styled from 'styled-components'

const ProfileDiv = styled.div`
  width: 100%;
  display: block;
  text-align: center;
`

const Profile = () => {

  const user = useSelector((state => state.user.value))

  return (
    <ProfileDiv>
      <h1>Profile:</h1>
      <p>Name: {user.user}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </ProfileDiv>
  )
}

export default Profile