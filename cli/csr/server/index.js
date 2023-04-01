import serverApp from '../../server/app'
import express from 'express'
import '../../server/index'

serverApp.use(express.static('./dist/csr/client'))
