import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

const Template = ({ children }) => (
  <div>
    <Header />
    <div id="main">
      {children}
      <div style={{ fontSize: '0.7em' }}>design courtesy of HTML5 UP</div>
    </div>
  </div>
)

export default Template
