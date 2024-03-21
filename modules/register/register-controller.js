import { createUser } from './register-model.js'
import { isLoggedIn } from '../session/session-controller.js'

if (isLoggedIn) window.location = 'index.html'

export function registerController(registerForm) {
  const submitButton = registerForm.querySelector('button')

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!isLoggedIn) handleRegisterSubmit(registerForm)
  })

  function handleRegisterSubmit(registerForm) {
    submitButton.disabled = true
    let errors = []

    if (!hasEqualPasswords(registerForm)) {
      errors.push('Las contraseñas no coinciden.')
    }

    for (const error of errors) {
      alert(error)
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
      alert('Registrado con éxito')
      window.location.href = 'login.html'
    } catch (error) {
      submitButton.disabled = false
      alert(error)
    }
  }
}
