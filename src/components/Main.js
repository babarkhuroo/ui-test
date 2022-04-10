import React from 'react'
import { StyledMain } from '../styles/Main.styled'

function Main() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <StyledMain>
      <form className='form'>
        <h2>Medical bill details</h2>
        <div className='progress-container'>
          <ul className='progress-bar'>
            <li className='active'>Provider</li>
            <li>Cost</li>
          </ul>
        </div>
        <div className='form-input'>
          <p className='medical'>
            <label htmlFor='medical'>
              Medical condition or treatment <i>(required)</i>
            </label>
            <input type='text' id='medical' />
          </p>
          <div className='insurance'>
            <p className='insurance-label'>
              Did you have insurance? <i>(required)</i>
            </p>
            <div className='radio-container'>
              <input
                type='radio'
                id='yes'
                name='insurance'
                value='yes'
                defaultChecked
              />
              <label htmlFor='yes' className='yes'>
                Yes
              </label>
              <input type='radio' id='no' name='insurance' value='no' />
              <label htmlFor='no' className='no'>
                No
              </label>
            </div>
          </div>
          <div className='img-picker'>
            <p className='img-label'>
              Upload invoice <i>(optional)</i>
            </p>
            <input type='file' name='image' id='image' accept='image/*' />
            <label htmlFor='image'>
              <span>Add images</span>
            </label>
          </div>
        </div>
        <button type='submit' className='btn' onClick={handleSubmit}>
          Continue
        </button>
      </form>
    </StyledMain>
  )
}

export default Main
