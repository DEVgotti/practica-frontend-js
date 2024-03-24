import { loginController } from '../modules/login/login-controller.js'

const loginForm = document.querySelector('#login')

loginForm.addEventListener('error-login-in', (event) => {
  // showNotification
  event.stopPropagation()
})
loginController(loginForm)
