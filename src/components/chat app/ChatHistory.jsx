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
                  }}
                  className={'message  ' + isSender}
                >
                  <p style={{ position: 'relative', top: 10 }}>
                    {message.message}
                  </p>
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



function TextMessage (){

  return (
   <p style={{position:'relative',top:10}}>{message.message}</p></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>

}