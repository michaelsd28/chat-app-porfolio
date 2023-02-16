import { Button } from '@mui/material'
import React from 'react'
import AnimatedBlob from './AnimatedBlob'



let linearGradientBackground =   'linear-gradient(to right top, #111827, #101a2a, #0f1b2e, #0c1d31, #091f35)'
let linearGradientBackground2 = 'linear-gradient(to right top, #254679, #2f5993, #386cae, #4081ca, #4796e6)'

function LandingPage() {
  return (
    <div
      style={{
        zIndex: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:
        linearGradientBackground,
        height: '100vh',
        width: '100vw',
      }}
    >
      <AnimatedBlob />

      <div
        style={{
          zIndex: 10,
          height: 800,
          width: 800,
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundImage:
          // linearGradientBackground2,
          borderRadius: 40,
        }}
      >
        {/* gradient h1 */}
        <h1  className='gradient-text'>Bienvenido a mi aplicacion de chat</h1>

        <img  style={{borderRadius:20 ,width:"40vw"}} src='https://cdn.dribbble.com/users/2285351/screenshots/16330755/media/18c20b369d63fac6621f94647004c864.png?compress=1&resize=400x300' alt="chat-img"/>
        <Button variant='contained' style={{width:"10vw",margin:20}}>Ver mas</Button>
      </div>
    </div>
  )
}

export default LandingPage
