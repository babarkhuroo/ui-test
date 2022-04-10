import React, { useState } from 'react'
import { StyledHeader } from '../styles/Header.styled'
import Modal from './Modal'
import { GiHamburgerMenu } from 'react-icons/gi'

function Header() {
  const [isModal, setIsModal] = useState(false)
  return (
    <>
      <StyledHeader>
        <h1>Logo</h1>
        <button className='nav-btn ham-btn' onClick={() => setIsModal(true)}>
          <GiHamburgerMenu />
        </button>
        <div className='nav-links'>
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
        </div>
      </StyledHeader>
      {isModal && <Modal isModal={isModal} setIsModal={setIsModal} />}
    </>
  )
}

export default Header
