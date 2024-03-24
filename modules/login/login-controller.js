import { loginUser } from './login-model.js'
import { isLoggedIn } from '../session/session-controller.js'
import { dispatchEvent } from '../../utils/dispatchEvent.js'
import { loaderController } from '../loader/loader-controller.js'

export const loginController = (loginForm) => {
  const spinner = loginForm.querySelector('#loader')
  const { showLoader, hideLoader } = loaderController(spinner)

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault()

    handleLoginSubmit(loginForm)
  })

  const handleLoginSubmit = async (loginForm) => {
    const { username, password } = getLoginData(loginForm)

    try {
      showLoader()
      const jwt = await loginUser(username, password, loginForm)
      localStorage.setItem('token', jwt)

      dispatchEvent(
        'success-login-in',
        {
          message: '¡Te has conectado con éxito!',
          type: 'success',
        },
        loginForm
      )

      setTimeout(() => {
        window.location = '../../index.html'
      }, 2000)
    } catch (error) {
      dispatchEvent(
        'error-login-in',
        {
          message: error,
          type: 'error',
        },
        loginForm
      )
    } finally {
      hideLoader()
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
