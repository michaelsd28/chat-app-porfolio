import React from 'react'
import { useParams } from 'react-router-dom'

function MainChat() {
  let { username } = useParams()

  return <div>MainChat {username}</div>
}

export default MainChat
