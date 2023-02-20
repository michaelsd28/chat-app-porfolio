import React, { createContext, useState } from 'react'

export const dataContext = createContext()

function GeneralContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [friendList, setFriendList] = useState([])
  const [user, setUser] = useState({})
  const [messageList, setMessageList] = useState([])
  const [currentFriend, setCurrentFriend] = useState({ isNull: true })
  const [webSocket, setWebSocket] = useState(null)

  const userJson = JSON.parse(localStorage.getItem('user'))
  let credentials = {
    username: userJson.id,
  }

  React.useEffect(() => {
    // scroll ul .ul-message-history to bottom with animation

    let messageHistory = document.querySelector('.ul-message-history')
    if (messageHistory) {
      messageHistory.style.transition = 'all 0.5s ease-in-out'
      messageHistory.scrollTop = messageHistory.scrollHeight
    }

    if (webSocket === null) {
      let ws = new WebSocket('ws://127.0.0.1:5001')
      setWebSocket(ws)
      ws.onopen = () => {
        console.log(
          'GeneralContextProvider - useEffect - ws.onopen:: ',
          'connected',
        )
        ws.send(JSON.stringify(credentials))
      }
      ws.onmessage = (event) => {
        setMessageList((prev) => {
          let message = JSON.parse(event.data)
          return [
            ...prev,
            {
              id: message.id,
              message: message.message,
              sender: message.sender,
              receiber: message.receiver,
              type: message.type,
              timestamp: message.timestamp,
            },
          ]
        })

        console.log(
          'GeneralContextProvider - useEffect - ws.onmessage:: ',
          event.data,
        )
      }
      ws.onclose = () => {
        console.log(
          'GeneralContextProvider - useEffect - ws.onclose:: ',
          'disconnected',
        )
      }

      return () => {
        console.log('GeneralContextProvider - useEffect - return:: ', '')
      }
    }
  }, [friendList, messageList, user, currentFriend])

  return (
    <dataContext.Provider
      value={{
        friendList,
        setFriendList,
        user,
        setUser,
        messageList,
        setMessageList,
        isDarkTheme,
        setIsDarkTheme,
        currentFriend,
        setCurrentFriend,
      }}
    >
      {children}
    </dataContext.Provider>
  )
}

export default GeneralContextProvider
