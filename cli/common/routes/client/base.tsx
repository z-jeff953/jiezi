import React from 'react'
import Page404 from '../../page/Page404'
import PageError from '../../page/PageError'
import { RouteObject } from 'react-router-dom'

export const baseRouteConfig: RouteObject[] = [
  {
    path: '/404',
    element: <Page404 />,
  },
  {
    path: '/error',
    element: <PageError />,
  },
  {
    path: '/',
    element: <div>Welcome</div>,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]
