import React from 'react'
import { StyledModal } from '../styles/Modal.styled'
import { GrClose } from 'react-icons/gr'
import { StyledHeader } from '../styles/Header.styled'

function Modal({ isModal, setIsModal }) {
  return (
    <StyledModal>
      <StyledHeader isModal={isModal}>
        <h1>Logo</h1>
        <button className='nav-btn close-btn' onClick={() => setIsModal(false)}>
          <GrClose />
        </button>
      </StyledHeader>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>Explore medical bills</a>
        </li>
        <li>
          <a href='/'>My account</a>
        </li>
      </ul>
    </StyledModal>
  )
}

export default Modal
