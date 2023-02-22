/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../styles/chat.css'
import { IconButton } from '@mui/material'
import { Mic, Send } from '@mui/icons-material'
import StopIcon from '@mui/icons-material/Stop'
import FadeInWhenVisible from '../Page animation/FadeWhenVisible'
import { dataContext } from '../../GlobalStore/GeneralContext'
import useRecorder from '../../custom hooks/useRecorder'
import EmptyModal from '../Single components/EmptyModal'
import BasicModal from '../Single components/BasicModal'

function InputMessage() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder()
  const [isRecordingActive, setIsRecordingActive] = React.useState(false)
  const [isPreviewRecording, setIsPreviewRecording] = React.useState(false)
  const [isTexting, setIsTexting] = React.useState(false)
  const [audioID, setAudioID] = React.useState('')

  const { messageList, setMessageList, currentFriend, user } = React.useContext(
    dataContext,
  )

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
      sendTextMessage(textInputValue, 'text')
    }
  }

  async function uploadAudio() {
    /// convert to blob and send to server

    let blob = await fetch(audioURL).then((r) => r.blob())

    /// wav form data
    let formData = new FormData()
    formData.append('file', blob)
    formData.append('filename', 'audio.wav')
    formData.append('filetype', 'audio/wav')

    var requestOptions = {
      method: 'POST',
      body: formData,
    }

    let response = await fetch(
      'https://localhost:7280/upload-file2',
      requestOptions,
    )
    let data = await response.json()

    if (data.status === 400) {
      alert('Error al subir audio')
    } else {
      localStorage.setItem('audioID', data.id)
    }

    return audioID
  }

  function sendTextMessage(textContent, type) {
    setMessageList([
      ...messageList,
      {
        id: messageList.length,
        message: textContent,
        sender: user.id,
        receiver: currentFriend.id,
        type: type,
        timestamp: new Date().toJSON(),
      },
    ])

    let ws = new WebSocket('ws://127.0.0.1:5001')
    ws.onopen = () => {
      let message = {
        sender: user.id,
        receiver: currentFriend.id,
        message: textContent,
        type: type,
        timestamp: new Date().toJSON(),
      }
      ws.send(JSON.stringify(message))
      ws.close()
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
  }, [textInputValue, setAudioID, audioID])

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

        {isPreviewRecording ? (
          <BasicModal
            isModalOpen={isPreviewRecording}
            setIsModalOpen={setIsPreviewRecording}
            modalFunction={async () => {
              let id = await uploadAudio()

              setAudioID(id)

              if (localStorage.getItem('audioID')) {
                let localAudioID = localStorage.getItem('audioID')

                sendTextMessage(localAudioID, 'audio')
                setIsPreviewRecording(false)
              }
            }}
            content={
              <div
                style={{
                  margin: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h2 style={{ marginBottom: 30, textAlign: 'center' }}>
                  Preview
                </h2>
                <audio src={audioURL} controls />
                {/* do you want to send this message? */}
                <h6 style={{ margin: 20 }}>queres enviar este mensaje?</h6>
              </div>
            }
          />
        ) : null}

        {isTexting ? (
          <FadeInWhenVisible>
            <div
              style={{ margin: '5px 5px 5px 10px' }}
              className="input-group-prepend"
            >
              <IconButton
                onClick={() => {
                  sendTextMessage(textInputValue, 'text')
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
                  if (!isRecordingActive) {
                    startRecording()
                    setIsRecordingActive(true)
                  } else {
                    stopRecording()
                    setIsRecordingActive(false)
                    setIsPreviewRecording(true)
                  }
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
