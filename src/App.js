import React, { useState } from 'react'
import Modal from './Modal'

const OTHER_CONTENT_STYLES = {
  backgroundColor: 'red',
  padding: '10px'
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div onClick={() => console.log('clicked')}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  )
}