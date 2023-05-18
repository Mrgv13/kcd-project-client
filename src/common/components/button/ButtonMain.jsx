import './button.scss'

import React from 'react'

const ButtonMain = ({ key = 1, text, onClick, styleComponent }) => {
  return (
    <button key={key} className={styleComponent || ''} onClick={onClick}>
      {text}
    </button>
  )
}

export default ButtonMain
