import { buildAnonymousSession, buildAuthenticatedSession } from './session-view.js'

export const sessionController = (nav) => {
  if (isLoggedIn()) {
    nav.innerHTML = buildAuthenticatedSession()
    const logoutButton = nav.querySelector('button')
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('token')
      sessionController(nav)
    })
  } else {
    nav.innerHTML = buildAnonymousSession()
  }
}

export function isLoggedIn() {
  return localStorage.getItem('token')
}
