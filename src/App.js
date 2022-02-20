import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Switch from '@mui/material/Switch'
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import { toogleTheme, init } from './components/Features/themes';

const AppStyled = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.usingDark ? props.theme.dark.bg : props.theme.light.bg )};
  color: ${props => (props.usingDark ? props.theme.dark.txt : props.theme.light.txt)};
  font-size: 30px;
  flex-wrap: wrap;
`
const ThemeSwitcherContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 60px;
`


function App() {
  const [usingDark, setUsingDark] = useState()

  const themeState = useSelector(state => state.themes.value)

  const dispatch = useDispatch()

  useEffect(() => {
    setUsingDark(themeState.isDarkTheme)
  }, [])
  
  const handleThemeChange = (e) => {
    setUsingDark(e.target.checked)
    localStorage.setItem("ThisSiteDarkMode", JSON.stringify(e.target.checked))
    dispatch(toogleTheme())
  }

  return (
    <AppStyled className="App" theme={themeState} usingDark={usingDark}>
        <Profile />
        <Login />
        <ThemeSwitcherContainer>
          <Switch checked={usingDark} onChange={handleThemeChange}/>
        </ThemeSwitcherContainer>
    </AppStyled>
  );
}

export default App;
