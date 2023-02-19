import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import { Button, Switch } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import PageAnimation from '../Page animation/PageAnimation'
import AnimatedBlob from './AnimatedBlob'

let linearGradientBackground =
  'linear-gradient(to right top, #111827, #101a2a, #0f1b2e, #0c1d31, #091f35)'
let linearGradientBackground2 =
  'linear-gradient(to right top, #254679, #2f5993, #386cae, #4081ca, #4796e6)'
let buttonGradient =
  'linear-gradient(to left, #3b62b7, #3d6bbb, #4274bf, #487dc3, #4f86c6)'
let containerStyle = {
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
}
let pageStyle = {
  zIndex: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: linearGradientBackground,
  height: '100vh',
  width: '100vw',
}

let imgStyle = {
  borderRadius: 20,
  width: '50vw',
}

function LandingPage() {
  return (
    <PageAnimation>
      <div style={pageStyle}>
        <AnimatedBlob />

        <div style={containerStyle}>
          {/* light/dark theme switcher on the top right */}

          <h1 className="gradient-text">Bienvenido a mi aplicacion de chat</h1>

          <img
            style={imgStyle}
            src={process.env.PUBLIC_URL + 'assets/chat-screenshot.png'}
            alt="chat screenshot"
          />
          <Link to="/login">
            <Button
              startIcon={<TravelExploreIcon />}
              variant="contained"
              style={{
                margin: 20,
                borderRadius: 20,
                background: buttonGradient,
              }}
            >
              Iniciar session
            </Button>
          </Link>
        </div>
      </div>
    </PageAnimation>
  )
}

export default LandingPage
