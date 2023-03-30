import path from 'path'
import fs from 'fs'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'

import ClientApp from '../../client/app'
import serverApp from '../../server/app'

import { run } from '../../server/index'

serverApp.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<ClientApp />)
  const html = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSR</title>
  </head>
  
  <body>
    <div id="root"></div>
  </body>
  
  </html>`
  return res.send(
    html.replace(
      '<div id="root"></div>',
      `<div id="root">${app}</div>`
    )
  )
})

serverApp.use(express.static('./ssr-dist'))

run()
