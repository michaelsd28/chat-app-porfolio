import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundImage:
    'linear-gradient(to right top, #111827, #101a2a, #0f1b2e, #0c1d31, #091f35)',
  color: 'white',

  bgcolor: 'background.paper',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
}

export default function BasicModal({
  isModalOpen,
  setIsModalOpen,
  modalFunction,
  content,
}) {
  const handleOpen = () => setIsModalOpen(true)
  const handleClose = () => setIsModalOpen(false)

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {content}
          <div className="d-flex justify-content-center">
            <Button
              variant="contained"
              color="success"
              style={{ margin: 10, borderRadius: 10 }}
              onClick={async () => {
                handleClose(false)
                await modalFunction()
              }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="error"
              type="submit"
              style={{ margin: 10, borderRadius: 10 }}
              onClick={() => {
                handleClose(false)
              }}
            >
              No
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
