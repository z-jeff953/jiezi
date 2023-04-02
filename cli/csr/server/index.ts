import serverApp from '../../server/app'
import express from 'express'
import '../../server/index'
import history from 'connect-history-api-fallback'

serverApp.use(history())
serverApp.use(express.static('./dist/csr/client'))
