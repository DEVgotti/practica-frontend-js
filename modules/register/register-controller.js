import { createUser } from './register-model.js'
import { isLoggedIn } from '../session/session-controller.js'
import { dispatchEvent } from '../../utils/dispatchEvent.js'
import { loaderController } from '../loader/loader-controller.js'

export function registerController(registerForm) {
  const spinner = registerForm.querySelector('#loader')
  const { showLoader, hideLoader } = loaderController(spinner)

  const submitButton = registerForm.querySelector('button')

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault()

    handleRegisterSubmit(registerForm)
  })

  function handleRegisterSubmit(registerForm) {
    submitButton.disabled = true
    let errors = []

    if (!hasEqualPasswords(registerForm)) {
      errors.push('Las contraseñas no coinciden.')
    }

    for (const error of errors) {
      dispatchEvent(
        'error-filling-form',
        {
          message: error,
          type: 'error',
        },
        registerForm
      )
    }

    if (errors.length === 0) {
      registerUser(registerForm)
    }
  }

  function hasEqualPasswords(registerForm) {
    const password = registerForm.querySelector('#password')
    const passwordConfirmation = registerForm.querySelector('#confirm-password')

    return password.value === passwordConfirmation.value
  }

  async function registerUser(registerForm) {
    const username = registerForm.querySelector('#username')
    const password = registerForm.querySelector('#password')

    try {
      await createUser(username.value, password.value)
      showLoader()
      dispatchEvent(
        'success-signing-up',
        {
          message: '¡Te has registrado con éxito!',
          type: 'success',
        },
        registerForm
      )

      setTimeout(() => {
        window.location.href = 'login.html'
      }, 2000)
    } catch (error) {
      submitButton.disabled = false
      dispatchEvent(
        'error-signing-up',
        {
          message: error,
          type: 'error',
        },
        registerForm
      )
    } finally {
      hideLoader()
    }
  }
}
