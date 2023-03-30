import path from 'path'

require('dotenv').config({
  path: path.resolve(path.join(__dirname, '../../'), '.env')
})

import express from 'express'
import app from './app'

const PORT = process.env.PORT || 3006

export function run () {
  const server = app.listen(PORT, function () {
    console.log('-------------------------------------------------')
    console.log(
      '| Server is listening on http://localhost:%s |',
      PORT
    )
    console.log('-------------------------------------------------')
  })
  return server
}
