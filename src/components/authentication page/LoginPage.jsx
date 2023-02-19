/* eslint-disable jsx-a11y/anchor-is-valid */
import { UploadFile } from '@mui/icons-material'
import { Button, Input } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import LoginStyles from '../../styles/Login.css'
import PageAnimation from '../Page animation/PageAnimation'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'



let loginPageStyle = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  // background: linearGradientBackground,
  color: 'gray',
}

let buttonStyle = {
  background:
    'linear-gradient(to left, #3b62b7, #3d6bbb, #4274bf, #487dc3, #4f86c6)',
  borderRadius: 10,
}

function LoginPage() {
  const [login, setLogin] = React.useState(true)
  const [userLogin, setUserLogin] = React.useState({
    username: '',
    password: '',
  })

  return (
    <PageAnimation>
      <div
        style={loginPageStyle}
        id="loginpage"
        className="loginpage animatedGradient"
      >
        <h2>Loguearse / Crear cuenta</h2>
        <div
          className={login ? 'container' : 'container right-panel-active'}
          id="container"
        >
          <RegisterForm />
          <LoginForm />

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Ya tienes cuenta?</h1>
                <p>
                  Pudes hacer click en el boton para loguearte con tu cuenta
                </p>
                <Button
                  variant="contained"
                  style={buttonStyle}
                  onClick={() => setLogin(!login)}
                  className="ghost"
                  id="signIn"
                >
                  Loguearse
                </Button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Nuevo usuario? </h1>
                <p>Puedes registrarte introduciendo algunos datos necesarios</p>
                <Button
                  style={buttonStyle}
                  variant="contained"
                  onClick={() => setLogin(!login)}
                  className="ghost"
                  id="signUp"
                >
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default LoginPage
