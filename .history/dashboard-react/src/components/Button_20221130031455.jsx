import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
    type="button"
    style={{backgroundColor:bgC}}
    >
      {text}
    </button>
  )
}

export default Button
