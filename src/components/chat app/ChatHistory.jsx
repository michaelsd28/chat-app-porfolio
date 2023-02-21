/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { dataContext } from '../../GlobalStore/GeneralContext'
import selectChat from '../chat app/assets/select-chat.json'
import Lottie from 'lottie-react'
function ChatHistory() {
  const { currentFriend, messageList, user } = React.useContext(dataContext)

  return (
    <div className="chat-history">
      {messageList.length === 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div style={{ position: 'relative', width: 450, height: 450 }}>
            <Lottie
              className="image-cropped-calc"
              animationData={selectChat}
              loop={true}
            />
          </div>
        </div>
      ) : (
        <ul
          style={{
            height: 400,
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: 10,
          }}
          className="m-b-0 ul-message-history"
        >
          {messageList.map((message) => {
            // date format is like this: 2023-02-18T03:37:47 and we want to show it like this: 02-18 03:37:47 without the year

            let date = new Date(message.timestamp)
            let dateFormated =
              date.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              }) +
              ' ' +
              date.toLocaleString('en-US', { month: '2-digit' }) +
              '-' +
              date.toLocaleString('en-US', { day: '2-digit' })

            let isSender =
              message.sender === currentFriend.id
                ? ' my-message float-right '
                : 'other-message float-left'

            let floatDirection =
              message.sender === currentFriend.id ? 'float-right' : 'float-left'
            let userImage =
              message.sender === currentFriend.id
                ? currentFriend.image
                : user.image

            return (
              <li className="clearfix" key={message.id}>
                <img
                  style={{
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                  className={'avatar ' + floatDirection}
                  src={userImage}
                  alt="avatar"
                />
                <div
                  style={{
                    position: 'relative',
                    padding: '8px 20px 8px 20px',
                    maxWidth: '60%',
                    marginBottom: 15,
                  }}
                  className={'message  ' + isSender}
                >
                  {message.type === 'text' ? (
                    <TextMessage text={message.message} />
                  ) : (
                    <AudioMessage audio={message.message} />
                  )}
                  {message.type === 'image' && (
                    <ImageMessage image={message.message} />
                  )}

                  <p
                    style={{
                      position: 'absolute',
                      whiteSpace: 'nowrap',
                      top: 65,
                      padding: 0,
                      margin: 0,
                      fontSize: 14,
                      color: 'white',
                    }}
                    className={floatDirection}
                  >
                    {dateFormated}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ChatHistory

function TextMessage({ text }) {
  return <p style={{ position: 'relative', top: 10 }}>{text}</p>
}

function ImageMessage({ image }) {
  let baseUrl = 'https://localhost:7280/get-file/'

  return (
    <div style={{ position: 'relative', top: 5 }}>
      <img
        style={{
          borderRadius: 20,
          backgroundColor: 'rgba(138, 138, 138, 0)',
          maxHeight: 200, 
        }}
        src={baseUrl + image}
        alt="image"
      />
    </div>
  )
}

function AudioMessage({ audio }) {
  let baseUrl = 'https://localhost:7280/get-file/'

  return (
    <div style={{ position: 'relative', top: 5 }}>
      <audio
        style={{
          borderRadius: 20,
          backgroundColor: 'rgba(138, 138, 138, 0)',
          maxHeight: 40,
        }}
        controls
      >
        <source src={baseUrl + audio} type="audio/wav" />
      </audio>
    </div>
  )
}
