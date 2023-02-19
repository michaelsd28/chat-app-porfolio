import { UploadFile } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'


let inputStyle = {
  borderRadius: 10,
}
let buttonStyle = {
  background:
    'linear-gradient(to left, #3b62b7, #3d6bbb, #4274bf, #487dc3, #4f86c6)',
  borderRadius: 10,
}

let fileName = 'Subir foto de perfil'

function RegisterForm() {
  return (
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
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          startIcon={<UploadFile />}
          style={{ borderRadius: 10, margin: 10 }}
          variant="contained"
          component="label"
        >
          {fileName ?? fileName}
          <input type="file" hidden />
        </Button>
        <span
          style={{ textAlign: 'center', verticalAlign: 'center' }}
        ></span>
      </div>

      <Button tabIndex="4" variant="contained" style={buttonStyle}>
        Registrame
      </Button>
    </form>
  </div>
  )
}

export default RegisterForm