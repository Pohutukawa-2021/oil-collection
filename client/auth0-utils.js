import { getAuthClient } from './actions/clients'
import { store } from './index'

const emptyUser = {
  auth0Id: '',
  email: '',
  token: ''
}

function saveUser (user = emptyUser) {
  store.dispatch(getAuthClient(user))
}

export async function cacheUser (useAuth0) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated) {
    try {
      const token = await getAccessTokenSilently()
      const userToSave = { auth0Id: user.sub, email: user.email, token }
      saveUser(userToSave)
    } catch (err) {
      console.error(err)
    }
  }
}

export function getLoginFn (useAuth0) {
  return useAuth0().loginWithRedirect
}

export function getLogoutFn (useAuth0) {
  return useAuth0().logout
}

export function getIsAuthenticated (useAuth0) {
  return useAuth0().isAuthenticated
}

export function getRegisterFn (useAuth0) {
  const { loginWithRedirect } = useAuth0()
  const redirectUri = `${window.location.origin}/#/register`
  return () => loginWithRedirect({
    redirectUri,
    screen_hint: 'signup'
  })
}
