interface CSRConfig {
  routerType: 'hash' | 'browser'
}

interface SSRConfig {}

interface JieZiConfig {
  port?: Number
  csr?: CSRConfig
  ssr?: SSRConfig
}

const Config: JieZiConfig = {
  port: 3000,
  csr: { routerType: 'browser' }
}

export default Config
