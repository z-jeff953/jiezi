import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'

import ClientApp from '../../client/app'
import serverApp from '../../server/app'

import { run } from '../../server/index'

serverApp.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<ClientApp />)

  return res.send(
    `<!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SSR</title>
    </head>
    
    <body>
      <div id="root">${app}</div>
    </body>
    </html>`
  )
})

serverApp.use(express.static('./dist/ssr'))

run()
