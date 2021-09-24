import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { HashRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import reducers from './reducers'
import App from './components/App'

export const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain='dev-eg4fpx11.us.auth0.com'
      clientId='qbt8xh6AE0Am8wHF60RhFZSuFzNop9hk'
      redirectUri={window.location.origin}
      audience='https://oil/api'
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
