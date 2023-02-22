/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../styles/chat.css'
import { Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import { dataContext } from '../../GlobalStore/GeneralContext'
import BasicModal from '../Single components/BasicModal'

function ChatHeader() {
  const { currentFriend } = React.useContext(dataContext)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div style={{ position: 'relative' }} className="chat-header clearfix">
      {currentFriend.isNull ? (
        <div className="col-lg-6">
          <div className="chat-about">
            <h4 className="gradient-text" style={{ color: 'black', margin: 0 }}>
              Por favor selecciona un amigo
            </h4>
          </div>
        </div>
      ) : (
        <div className="col-lg-6">
          <a href="#" data-toggle="modal" data-target="#view_info">
            <img
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              src={currentFriend.image}
              alt="avatar"
            />
          </a>
          <div className="chat-about">
            <h6 className="m-b-0">{currentFriend.name}</h6>
            <small>Visto: hace 2 horas</small>
          </div>
        </div>
      )}
      <div
        style={{ position: 'absolute', right: 0, margin: '0 0 10px 10px' }}
        className="row"
      >
        <div>
          <Button
            onClick={() => {
              setIsModalOpen(true)
            }}
            style={{ paddding: 0, margin: 0, border: 'none' }}
            aria-label="settings"
          >
            <a href="#" className="btn btn-outline-secondary">
              <SettingsApplicationsIcon style={{ padding: 0 }} />
            </a>
          </Button>

          <Button
            style={{ paddding: 0, margin: 0, border: 'none' }}
            aria-label="logout"
            onClick={() => {
              let confirm = window.confirm('¿Estas seguro de cerrar sesión?')
              if (!confirm) return

              localStorage.clear()
              window.location.reload()
            }}
          >
            <a href="#" className="btn btn-outline-danger">
              <LogoutIcon style={{ padding: 0 }} />
            </a>
          </Button>
        </div>
      </div>
      <BasicModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
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
            <h4>Ajustes</h4>

            {/* <input type="checkbox"  /> */}
            <div style={{display:"flex",flexDirection:"column",justifyContent:"start"}}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {' '}
              <input  type="checkbox" id="input-borrar" name="input-borrar"  />
              <label style={{margin:10}} for="input-borrar">Borrar mensajes cuando cierra sesion</label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {' '}
              <input  type="checkbox" id="sesion-input" name="sesion-input"  />
              <label style={{margin:10}} for="sesion-input">Mantener sesion</label>
            </div>
            </div>

            <p>Quieres guardar ajustes?</p>
          </div>
        }
      />
    </div>
  )
}

export default ChatHeader
