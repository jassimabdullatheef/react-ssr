
import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import Routes from './client/Routes'

const app = express()

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator: function(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts
  }
}))
app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = createStore(req)

  const promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route.getInitialProps ? route.getInitialProps(store) : null
  })

  Promise.all(promises).then(() => {
    return res.send(renderer(req, store))
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
