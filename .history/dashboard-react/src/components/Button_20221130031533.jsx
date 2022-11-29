import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
    type="button"
    style={{backgroundColor:bgColor, color, borderRadius}}
    className={`text-$`}
    >
      {text}
    </button>
  )
}

export default Button
