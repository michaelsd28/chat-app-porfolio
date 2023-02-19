/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@mui/material'
import React from 'react'
import { dataContext } from '../../GlobalStore/GeneralContext'

let buttonStyle = {
  background:
    'linear-gradient(to left, #3b62b7, #3d6bbb, #4274bf, #487dc3, #4f86c6)',
  borderRadius: 10,
}

function LoginForm() {
  const [userLogin, setUserLogin] = React.useState({
    username: '',
    password: '',
  })
  const {user,setUser} = React.useContext(dataContext)
  return (
    <div className="form-container sign-in-container">
      <form
        onSubmit={async (event) => {
          let user = await HandleLoginForm(event, userLogin)
          setUser(user)
        }}
        action="#"
      >
        <h1 style={{ whiteSpace: 'nowrap' }}>Cuenta personal</h1>

        <span style={{ color: 'black', opacity: 0.5 }}>
          Coloca tus datos para loguearte
        </span>
        <input
          onKeyUp={(event) => {
            setUserLogin({ ...userLogin, username: event.target.value })
          }}
          style={{ borderRadius: 10 }}
          type="username"
          placeholder="Username"
        />
        <input
          onKeyUp={(event) => {
            setUserLogin({ ...userLogin, password: event.target.value })
          }}
          style={{ borderRadius: 10 }}
          type="password"
          placeholder="Password"
        />
        <a href="#">Olvidaste la contraseña?</a>

        <Button type="submit" variant="contained" style={buttonStyle}>
          Acceder
        </Button>
      </form>
    </div>
  )
}

export default LoginForm

async function HandleLoginForm(event, { username, password }) {
  event.preventDefault()

  let url = 'https://localhost:7280/login/'
  let data = {
    username: username,
    password: password,
  }

  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  let userResponse = await response.json()

  if (userResponse['status'] !== 400) {
    localStorage.setItem('user', JSON.stringify(userResponse))
    
     window.location.href = '/chat/' + userResponse.username
  } else {
    alert('Usuario o contraseña incorrectos')
  }

  return userResponse
}
