import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../../client/app'
import { Mode } from '../../common/const/mode'


const rootELe = document.getElementById('root') as HTMLElement
const root = createRoot(rootELe)

root.render(<React.StrictMode>
  <App mode={Mode.CSR} />
</React.StrictMode>,)
