import React from 'react'
import { StaticRouter } from 'react-router-dom/server'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Mode } from "../../common/const/mode"
import { routeConfig } from './../../common/routes/client/routes'


export interface RouterProps { mode: Mode, url?: string }

const RouteElement = () => useRoutes(routeConfig)

export default function ({ mode, url }: RouterProps) {
  if (mode === Mode.SSR) {
    return <StaticRouter location={url as string}>
      <RouteElement />
    </StaticRouter>
  }

  return <BrowserRouter>
    <RouteElement />
  </BrowserRouter>
}
