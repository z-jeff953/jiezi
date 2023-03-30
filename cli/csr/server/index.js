import serverApp from '../../server/app'

import { run } from '../../server/index'

import express from 'express'

serverApp.use(express.static('./dist/csr/client'))

run()
