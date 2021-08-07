import React from 'react'
import './ButtonSecondar.css'

function ButtonSecondary({ name, type, onClick }) {
  return (
    <button className='buttonSecondary' type={type} onClick={onClick}>
      {name}
    </button>
  )
}

export default ButtonSecondary