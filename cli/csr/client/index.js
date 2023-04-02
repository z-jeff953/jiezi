import React from 'react'
import { render } from 'react-dom'
import App from '../../client/app'

render(
  <React.StrictMode>
    <App mode='csr' />
  </React.StrictMode>,
  document.getElementById('root')
)
