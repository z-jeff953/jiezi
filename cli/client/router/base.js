import Page404 from '../../util/Page404'
import PageError from '../../util/PageError'

export const baseRouteConfig = [
  {
    path: '/404',
    component: Page404,
    exact: true
  },
  {
    path: '/error',
    component: PageError,
    exact: true
  }
]
