import './button.scss'

import React from 'react'

const ButtonMain = ({ text, onClick, styleComponent }) => {
  return (
    <button className={styleComponent || ''} onClick={onClick}>
      {text}
    </button>
  )
}

export default ButtonMain
