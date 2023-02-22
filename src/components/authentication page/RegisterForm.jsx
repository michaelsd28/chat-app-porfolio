import { UploadFile } from '@mui/icons-material'
import { Button } from '@mui/material'

import Lottie from "lottie-react";
import LoadingLottie from './assets/loading.json'

import React from 'react'

let inputStyle = {
  borderRadius: 10,
}
let buttonStyle = {
  background:
    'linear-gradient(to left, #3b62b7, #3d6bbb, #4274bf, #487dc3, #4f86c6)',
  borderRadius: 10,
}




function RegisterForm() {
  const [userForm, setUserForm] = React.useState({
    name: '',
    username: '',
    password: '',
    repeatedPassword: '',
    image: '',
  })

  const [Loading, setLoading] = React.useState(false)
  const [fileName, setFileName] = React.useState('Subir imagen')

  return (
    <>
   
    <div className="form-container sign-up-container">

    {Loading && (
             <Lottie
             style={{ position: 'absolute', top: 0, left: 0, zIndex: 1000 }}
             className="image-cropped-calc"
             animationData={LoadingLottie}
             loop={true}
           />
      )}

      <form action="#">
        <h1 style={{ whiteSpace: 'nowrap' }}>Crear una cuenta</h1>

        <span>Puedes user un email para registrarte</span>
        <input
          style={inputStyle}
          type="text"
          autocomplete="on"
          spellcheck="false"
    
          aria-label="name"
          placeholder="Nombre"
          name="name"
          id="name"
          onKeyUp={(event) => {
            let name = event.target.value
            setUserForm({ ...userForm, name: name })
          }}
        />

        <input
   
          style={inputStyle}
          name="username"
          type="username"
          placeholder="username"
          label="username"
          onKeyUp={(event) => {
            let username = event.target.value
            setUserForm({ ...userForm, username: username })
          }}
        />
        <input
      
          name="password"
          style={inputStyle}
          type="password"
          placeholder="Contraseña"
          label="password"
          onKeyUp={(event) => {
            let password = event.target.value
            console.log("password", password)
            setUserForm({ ...userForm, password: password })
          }}
        />
        <input
      
          name="repeatedPassword"
          style={inputStyle}
          type="password"
          placeholder="Repite la contraseña"
          label="repeatedPassword"
          onKeyUp={(event) => {
            let repeatedPassword = event.target.value
            console.log("repeatedPassword", repeatedPassword)
            setUserForm({ ...userForm, repeatedPassword: repeatedPassword })
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            startIcon={<UploadFile />}
            style={{ borderRadius: 10, margin: 10 }}
            variant="contained"
            component="label"
          >
            {fileName ?? fileName}
            <input
              onChange={(event) => {
                let file = event.target.files[0]
                // convert to base64
                let reader = new FileReader()
                reader.readAsDataURL(file)
                setFileName(file.name)
                reader.onload = function () {
                  let base64 = reader.result

                  setUserForm({ ...userForm, image: base64 })
                }
                reader.onerror = function (error) {
                  console.log('Error: ', error)
                }
              }}
              type="file"
              hidden
            />
          </Button>
          <span style={{ textAlign: 'center', verticalAlign: 'center' }}></span>
        </div>

        <Button
          onClick={async () => {
            await RegisterUser(userForm, setLoading)
          }}
        
          variant="contained"
          style={buttonStyle}
        >
          Registrame
        </Button>
      </form>
    </div>
    </>
  )
}

export default RegisterForm

async function RegisterUser(newUser, setLoading) {
  setLoading(true)
  let headers = new Headers()
  headers.append('Content-Type', 'application/json')
  // if password and repeated password are the same
  if (newUser.password !== newUser.repeatedPassword) {
    alert(
      'contraseñas no son iguales' +
        newUser.password +
        ' ' +
        newUser.repeatedPassword,
    )
    return
  }


  let registerUser = {
    id: '3',
    name: newUser.name,
    username: newUser.username,
    password: newUser.password,
    image: newUser.image,
    friends : []
  }

  // not null or empty values
  if (
    newUser.name === '' ||
    newUser.username === '' ||
    newUser.password === '' ||
    newUser.repeatedPassword === ''
  ) {
    alert('todos los campos son obligatorios')
    return
    
  }

  let response = await fetch('https://localhost:7280/register-user/', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(registerUser),
  })

  let user = await response.json()



  setLoading(false)
  if (user.status === 400) {
    alert('usuario ya existe')

    return;
  } else {
    alert('usuario creado')
    let userJson = await fetchUser(user.id)
    localStorage.setItem('user', JSON.stringify(userJson))
    window.location.href = '/chat/'+userJson.username
    return
  }
}

async function fetchUser(id) {
  let response = await fetch(`https://localhost:7280/get-user/${id}`)
  let user = await response.json()
  console.log('fetchUser - user:: ', user)
  return user
}

