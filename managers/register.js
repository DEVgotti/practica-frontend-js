import { registerController } from '../modules/register/register-controller.js'

const registerForm = document.querySelector('#register-form')

registerForm.addEventListener('error-signing-up', (event) => {
  // showNotification
  event.stopPropagation()
})
registerController(registerForm)
