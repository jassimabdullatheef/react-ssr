import React from 'react'
import path from 'path'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { ChunkExtractor } from '@loadable/server'

import Routes from '../client/Routes'
import serialize from 'serialize-javascript'

const webStats = path.resolve('build/loadable-stats.json')

export default (req, store) => {
  const webExtractor = new ChunkExtractor({ statsFile: webStats })

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.url}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  const html = `<html>
        <head>
        ${webExtractor.getLinkTags()}
        ${webExtractor.getStyleTags()}
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
              window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            ${webExtractor.getScriptTags()}
        </body>
    </html>`

  return html
}
