/* eslint-disable jsx-a11y/anchor-is-valid */
import { UploadFile } from '@mui/icons-material'
import { Button, Input } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import LoginStyles from '../../styles/Login.css'
import PageAnimation from '../Page animation/PageAnimation'

let linearGradientBackground =
  'linear-gradient(to right top, #111827, #101a2a, #0f1b2e, #0c1d31, #091f35)'
let linearGradientBackground2 =
  'linear-gradient(to right top, #254679, #2f5993, #386cae, #4081ca, #4796e6)'

let inputStyle = {
  borderRadius: 10,
}
let fileName = "Subir foto de perfil";

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
        <div className="form-container sign-up-container">
          <form action="#">
            <h1 style={{ whiteSpace: 'nowrap' }}>Crear una cuenta</h1>

            <span>Puedes user un email para registrarte</span>
            <input
              style={inputStyle}
              type="text"
              jsname="YPqjbf"
              autocomplete="off"
              spellcheck="false"
              tabindex="0"
              aria-label="First name"
              name="firstName"
              id="firstName"
              dir="ltr"
            />

            <input
              tabIndex="1"
              style={inputStyle}
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              tabIndex="2"
              name="password"
              style={inputStyle}
              type="password"
              placeholder="Contraseña"
            />
            <input
              tabIndex="3"
              name="password"
              style={inputStyle}
              type="password"
              placeholder="Repite la contraseña"
            />
            <div style={{display:"flex", flexDirection:"row"}}>
            <Button startIcon={<UploadFile/>} style={{borderRadius:10,margin:10}} variant="contained" component="label">
            {fileName??fileName}
              <input type="file" hidden />
        
            </Button>
            <span style={{textAlign:"center",verticalAlign:"center"}}></span>
            </div>

            <Button tabIndex="4" variant="contained" style={buttonStyle}>
              Registrame
            </Button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1 style={{ whiteSpace: 'nowrap' }}>Cuenta personal</h1>

            <span style={{ color: 'black', opacity: 0.5 }}>
              Coloca tus datos para loguearte
            </span>
            <input
              style={{ borderRadius: 10 }}
              type="email"
              placeholder="Email"
            />
            <input
              style={{ borderRadius: 10 }}
              type="password"
              placeholder="Password"
            />
            <a href="#">Olvidaste la contraseña?</a>
            <Link
              style={{ padding: 0, margin: 0, color: 'white' }}
              to="/chat/michael"
            >
              <Button variant="contained" style={buttonStyle}>
                Acceder
              </Button>
            </Link>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Ya tienes cuenta?</h1>
              <p>Pudes hacer click en el boton para loguearte con tu cuenta</p>
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
