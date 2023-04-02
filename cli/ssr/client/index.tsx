import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from '../../client/app'
import { Mode } from '../../common/const/mode'

hydrateRoot(document.getElementById('root') as HTMLElement, <App mode={Mode.SSR} />)
