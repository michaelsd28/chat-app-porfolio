import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'




function EmptyModal({ isModalOpen, setIsModalOpen, content }) {

  const handleOpen = () => setIsModalOpen(true)
  const handleClose = () => setIsModalOpen(false)


  return (
    <div >
    <Modal
      open={isModalOpen}  
      onClose={handleClose}


      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >


{content}


    </Modal>
    </div>
  )
}

export default EmptyModal
