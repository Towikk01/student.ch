import React from 'react'

const Button = ({ children, width = 'fit-content', type = '' }) => {
  return (
    <button
      className={`bg-primary text-black-pearl px-4 py-2 ${width}  ${type}} rounded-lg hover:bg-soft-gray hover:text-primary transition-all duration-200`}>{children}</button>
  )
}

export default Button
