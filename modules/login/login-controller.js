import { loginUser } from './login-model.js'
import { isLoggedIn } from '../session/session-controller.js'
import { dispatchEvent } from '../../utils/dispatchEvent.js'

export const loginController = (loginForm) => {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault()

    handleLoginSubmit(loginForm)
  })

  const handleLoginSubmit = async (loginForm) => {
    const { username, password } = getLoginData(loginForm)

    try {
      const jwt = await loginUser(username, password)
      localStorage.setItem('token', jwt)
      alert('Conectado con éxito')
      window.location = '../../index.html'
    } catch (error) {
      dispatchEvent(
        'error-login-in',
        {
          message: error,
          type: 'error',
        },
        loginForm
      )
    }
  }

  const getLoginData = (loginForm) => {
    const formData = new FormData(loginForm)
    const username = formData.get('username')
    const password = formData.get('password')

    return {
      username,
      password,
    }
  }
}
