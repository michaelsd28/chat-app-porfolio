import { DeleteOutline } from '@mui/icons-material'
import React from 'react'
import { dataContext } from '../../GlobalStore/GeneralContext'

function FriendList() {
  const [isHoverFriend, setIsHoverFriend] = React.useState(false)
  const [hoverFriendId, setHoverFriendId] = React.useState(null)

  const {
    friendList,
    currentFriend,
    setCurrentFriend,
    setMessageList,
    user,
    setFriendList,
  } = React.useContext(dataContext)

  function removeFriend(id) {
    let newFriendList = friendList.filter((friend) => friend.id !== id)
    setFriendList(newFriendList)
    setMessageList([])
  }

  return (
    <ul
      style={{ overflow: 'auto' }}
      className="list-unstyled chat-list mt-2 mb-0"
    >
      {friendList.length === 0 ? (
        <div
          style={{
            borderRadius: 20,
            background:
            'linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )',
          color: 'rgba(0, 0, 0, 0.921)',
            display: 'flex',
            justifyContent: 'center',
       


          }}
        >
          <h6 style={{marginTop:10}}>Please add a friend</h6>
        </div>
      ) : (
        <div>
          {friendList.map((friend) => {
            let isActive = currentFriend.name === friend.name ? 'active' : ''
            return (
              <li
              key={friend.id}
                onMouseEnter={() => {
                  setIsHoverFriend(true)
                  setHoverFriendId(friend.id)
                }}
                onMouseLeave={() => {
                  setIsHoverFriend(false)
                  setHoverFriendId(null)
                }}
                onClick={async () => {
                  setCurrentFriend(friend)

                  let messages = await fetchMessages(user.id, friend.id)
                  setMessageList(messages)
                  console.log('calling fetchMessages - messages:: ')
                }}
                style={{ position: 'relative' }}
                className={`clearfix ${isActive}`}
              >
                <img
                  style={{
                    cursor: 'none',
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                  src={friend.image}
                  alt="avatar"
                />
                <div className="about">
                  <div className="name">{friend.name}</div>
                  <div className="status">
                    {' '}
                    <i className="fa fa-circle offline"></i>online
                  </div>
                </div>
                {/* top right corner del button */}

                {isHoverFriend && hoverFriendId === friend.id && (
                  <div
                    onClick={async () => {
                      let confirm = window.confirm(
                        `Estas seguro que quieres borrar "${friend.name}"?`,
                      )
                      if (!confirm) return

                      setTimeout(() => {
                        removeFriend(friend.id)
                      }, 200)
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,

                      // lightRed
                      color: '#560305',
                      fontSize: 20,
                      padding: 5,
                    }}
                  >
                    <DeleteOutline />
                  </div>
                )}
              </li>
            )
          })}
        </div>
      )}
    </ul>
  )
}

export default FriendList

async function fetchMessages(id1, id2) {
  let response = await fetch(
    `https://localhost:7280/get-messages/${id1}/${id2}`,
  )
  let data = await response.json()
  return data
}
