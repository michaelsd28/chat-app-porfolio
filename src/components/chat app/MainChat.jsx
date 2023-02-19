/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/chat.css'
import PageAnimation from '../Page animation/PageAnimation'
import { dataContext } from '../../GlobalStore/GeneralContext'
import FriendList from './FriendList'
import UserHeroCard from './UserHeroCard'
import ChatHeader from './ChatHeader'
import ChatHistory from './ChatHistory'
import InputMessage from './InputMessage'
let containerStyle = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  color: 'black',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background:
    'linear-gradient(to right top, #111827, #101a2a, #0f1b2e, #0c1d31, #091f35)',
  color: 'gray',
}

function MainChat() {
  const { user, setUser, setFriendList, friendList } = React.useContext(
    dataContext,
  )

  // let { username } = useParams()




  React.useEffect(() => {

    const fetchData = async () => {
      let data = await fetchUser(userJson.id)
      setUser(data)
      setFriendList(data.friends)
    }


    let localUser = localStorage.getItem('user')
    let userJson = JSON.parse(localUser)

  if (localUser === null) {
  window.location.href = '/login'
  }




    fetchData().catch((err) =>
      console.log('MainChat - fetchData - err:: ', err),
    )

    return () => {
  console.log("MainChat - useEffect - return:: ", "")
    }
  }, [])

  return (
    <PageAnimation>
      {' '}
      <div style={containerStyle}>
        <div className="container  d-flex flex-column">
          <div className="row clearfix ">
            <div className="col-lg-12 ">
              <div
                style={{
                  display: 'flex',

                  flexDirection: 'column',

                  backgroundImage:
                    'radial-gradient( circle farthest-corner at 10% 20%,  rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% )',
                }}
                className="card chat-app"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto',
                    height: '100%',
                  }}
                  id="plist"
                  className="people-list "
                >
                  <div className="input-group ">
                    <UserHeroCard user={user} />
                    <div className="input-group-prepend"></div>

                    <input
                      onKeyUp={(event) => {
                        let text = event.target.value
                        let filteredFriends = user.friends.filter((friend) => {
                          return friend.name

                            .toLowerCase()
                            .includes(text.toLowerCase())
                        })
                        setFriendList(filteredFriends)
                      }}
                      style={{
                        borderRadius: 20,
                        background:
                          'linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% )',
                        color: 'black',
                      }}
                      autoCorrect="off"
                      type="text"
                      className="form-control "
                      placeholder="🔍 Search..."
                      spellCheck="false"
                    />
                  </div>

                  <FriendList />
                </div>
                <div className="chat">
                  <ChatHeader />

                  <ChatHistory />

                  <InputMessage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default MainChat

async function fetchUser(id) {
  let response = await fetch(`https://localhost:7280/get-user/${id}`)
  let user = await response.json()
  console.log('fetchUser - user:: ', user)
  return user
}
