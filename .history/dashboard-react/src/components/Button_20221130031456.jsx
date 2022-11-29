import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
    type="button"
    style={{backgroundColor:bgColor}}
    >
      {text}
    </button>
  )
}

export default Button
