import React from 'react'

const CustomSection = ({ children, direction = 'col', center = '' }) => {
  return (
    <section className={`p-5 gap-5 flex flex-${direction} ${center}`}>
      {children}
    </section>
  )
}

export default CustomSection
