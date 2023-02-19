import React, { createContext, useState } from 'react'

export const dataContext = createContext()

function GeneralContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [friendList, setFriendList] = useState([])
  const [user, setUser] = useState({})
  const [messageList, setMessageList] = useState([])
  const [currentFriend, setCurrentFriend] = useState({isNull:true})

  React.useEffect(() => {

  console.log("GeneralContextProvider - useEffect - messageList:: ", messageList)
    return () => {
     console.log("GeneralContextProvider - useEffect - return:: ", "")
    }
  }, [friendList,messageList,user,currentFriend])

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
