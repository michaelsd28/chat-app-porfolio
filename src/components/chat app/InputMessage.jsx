/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../styles/chat.css'
import { IconButton } from '@mui/material'
import { Mic, Send } from '@mui/icons-material'
import StopIcon from '@mui/icons-material/Stop'
import FadeInWhenVisible from '../Page animation/FadeWhenVisible'
import { dataContext } from '../../GlobalStore/GeneralContext'

function InputMessage() {
  const [isTexting, setIsTexting] = React.useState(false)
  const [isRecording, setIsRecording] = React.useState(false)
  const {
    messageList,
    setMessageList,
    currentFriend,
    user,
    webSocket,
  } = React.useContext(dataContext)

  const [textInputValue, setTextInputValue] = React.useState('')

  React.useEffect(() => {
    if (textInputValue.length > 0) {
      setIsTexting(true)
    } else {
      setIsTexting(false)
    }
    return () => {}
  }, [textInputValue])

  function handleTexting(event) {
    setTextInputValue(event.target.value)

    if (event.key === 'Enter' && textInputValue.length > 0) {
      sendTextMessage()
    }
  }

  function sendTextMessage() {
    setMessageList([
      ...messageList,
      {
        id: messageList.length,
        message: textInputValue,
        sender: user.id,
        receiber: currentFriend.id,
        type: 'text',
        timestamp: new Date().toJSON(),
      },
    ])

    let ws = new WebSocket('ws://127.0.0.1:5001')
    ws.onopen = () => {
      let message = {
        sender: user.id,
        receiver: currentFriend.id,
        message: textInputValue,
        type: 'text',
        timestamp: new Date().toJSON(),
      }
      ws.send(JSON.stringify(message))
    }
    let input = document.querySelector('.input-chat')
    input.value = ''
    setTextInputValue('')
  }

  React.useEffect(() => {
    if (textInputValue.length > 0) {
      setIsTexting(true)
    } else {
      setIsTexting(false)
    }
    return () => {}
  }, [textInputValue])

  return (
    <div className="chat-message clearfix">
      <div className="input-group mb-0">
        <input
          disabled={currentFriend.isNull || isRecording}
          spellCheck="false"
          onKeyUp={handleTexting}
          style={{ borderRadius: '20px' }}
          type="text"
          className="form-control input-chat"
          placeholder="Escribe un mensaje"
        />

        {isTexting ? (
          <FadeInWhenVisible>
            <div
              style={{ margin: '5px 5px 5px 10px' }}
              className="input-group-prepend"
            >
              <IconButton
                onClick={() => {
                  sendTextMessage()
                }}
                style={{
                  background:
                    'radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )',
                }}
                aria-label="add to favorites"
              >
                <Send style={{ color: 'white' }} />
              </IconButton>
            </div>
          </FadeInWhenVisible>
        ) : (
          <FadeInWhenVisible>
            <div
              style={{ margin: '5px 5px 5px 10px' }}
              className="input-group-prepend"
            >
              <IconButton
                onClick={() => {
                  setIsRecording(!isRecording)
                }}
              >
                {isRecording ? (
                  <StopIcon style={{ color: 'white' }} />
                ) : (
                  <Mic style={{ color: 'white' }} />
                )}
              </IconButton>
            </div>
          </FadeInWhenVisible>
        )}
      </div>
    </div>
  )
}

export default InputMessage

function handleSubmit(event) {
  event.preventDefault()
  alert('A name was submitted: ')
}
