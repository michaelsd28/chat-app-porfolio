/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../styles/chat.css'
import { Tooltip } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import EditIcon from '@mui/icons-material/Edit'
import BasicModal from '../Single components/BasicModal'
import { dataContext } from '../../GlobalStore/GeneralContext'

let inputStyle = {
  background: 'rgba(255, 255, 255, 0.5)',
  borderRadius: 10,
  border: 'none',
  outline: 'none',
  padding: 10,
  margin: 10,
  width: '100%',
  color: 'black',
  fontSize: 20,
}

function UserHeroCard({ user }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [friendId, setFriendId] = React.useState('')
  const {setFriendList} = React.useContext(dataContext)

  return (
    <div
      className="card d-flex justify-content-center align-items-center"
      style={{
        borderRadius: 20,
        fontFamily: 'Roboto',
        background:
          'linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )',
        color: 'rgba(0, 0, 0, 0.921)',
      }}
    >
      <BasicModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalFunction={async () => await AddFriend(user.id, friendId,setFriendList)}
        content={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              justifyItems: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <h4>Add friend</h4>
            <input
              onKeyUp={(event) => {
                setFriendId(event.target.value)
              }}
              style={inputStyle}
              type="text"
              placeholder="Enter id"
            />
          </div>
        }
      />
      <img
        style={{
          width: 100,
          height: 100,
          margin: '20px 20px 0px 20px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
        }}
        className="card-img-top"
        src={user.image}
        alt="dasd"
      />
      <div className="card-body">
        <p style={{ textAlign: 'center' }} className="card-text ">
          {user.name}
        </p>

        <div className="card-footer">
          <Tooltip title="Añadir amigo">
            <a
              className="btn btn-outline-success"
              style={{ borderRadius: 15, margin: 10 }}
              variant="contained"
              onClick={() => setIsModalOpen(true)}
            >
              <AddCircleIcon />
            </a>
          </Tooltip>

          <Tooltip title="Editar">
            <a
              className="btn btn-outline-info"
              style={{
                borderRadius: 15,
                margin: 10,
              }}
              variant="contained"
            >
              <EditIcon />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default UserHeroCard

async function AddFriend(userId, friendId,setFriendList) {



  let response = await fetch(
    `https://localhost:7280/add-friend/${userId}/${friendId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  let userResponse = await response.json()

  if (userResponse['status'] === 400) {
    alert('Usuario  incorrectos')
  } else {
    alert('Usuario agregado')
    setFriendList(userResponse)
  }









   
}
