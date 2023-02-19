/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../styles/chat.css'
import { IconButton } from '@mui/material'
import { Mic, Send } from '@mui/icons-material'
import StopIcon from '@mui/icons-material/Stop'
import FadeInWhenVisible from '../Page animation/FadeWhenVisible'


function InputMessage() {

    const [isTexting, setIsTexting] = React.useState(false)
    const [isRecording, setIsRecording] = React.useState(false)
  
    const [textInputValue, setTextInputValue] = React.useState('')

    function handleTexting(event) {
        setTextInputValue(event.target.value)
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
    <div  className="chat-message clearfix">
    <div
  
      className="input-group mb-0"
    >
      <input
      spellCheck="false"
        onKeyUp={handleTexting}
        style={{ borderRadius: '20px' }}
        type="text"
        className="form-control"
        placeholder="Enter text here..."
      />
      {isTexting ? (
        <FadeInWhenVisible>
          <div
            style={{ margin: '5px 5px 5px 10px' }}
            className="input-group-prepend"
          >
            <IconButton
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