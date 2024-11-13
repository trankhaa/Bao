import React, { children } from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

const DefaultComponent = () => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  )
}

export default DefaultComponent