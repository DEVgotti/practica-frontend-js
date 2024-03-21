import { buildAnonymousSession, buildAuthenticatedSession } from './session-view.js'

export const sessionController = (nav) => {
  if (isLoggedIn()) {
    nav.innerHTML = buildAuthenticatedSession()
    const logoutButton = nav.querySelector('button')
    logoutButton.addEventListener('click', () => {
      logoutButton.removeItem('token')
      sessionController(nav)
    })
  } else {
    nav.innerHTML = buildAnonymousSession()
  }

  function isLoggedIn() {
    return localStorage.getItem('token')
  }
}
