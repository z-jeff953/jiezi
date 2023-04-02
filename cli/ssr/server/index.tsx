import path from 'path'
import fs from 'fs'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'

import { matchRoutes } from 'react-router-dom'
import routes from '../../client/router/index'

import ClientApp from '../../client/app'
import serverApp from '../../server/app'

import '../../server/index'
import { Mode } from '../../common/const/mode'

const htmlPath = path.resolve(
  process.env.NODE_ENV === 'production'
    ? './index.html'
    : './dist/ssr/server/index.html'
)

serverApp.get('*', (req, res) => {
  const app = ReactDOMServer.renderToString(<ClientApp url={req.url} mode={Mode.SSR} />)
  fs.readFile(htmlPath, 'utf8', (err, html) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }

    res.send(
      html.replace(
        '<div id="root"></div>',
        `<div id="root">${app}</div>`
      )
    )
  })
})

serverApp.use(express.static('./dist/ssr/server/index.html'))
