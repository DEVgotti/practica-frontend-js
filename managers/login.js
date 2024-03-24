import { sessionController } from '../modules/session/session-controller.js'
import { loginController } from '../modules/login/login-controller.js'
import { notificationController } from '../modules/notification/notification-controller.js'

const notificationList = document.querySelector('.notification-list')
const loginForm = document.querySelector('#login')
const session = document.querySelector('#session')

const { showNotification } = notificationController(notificationList)

loginForm.addEventListener('error-login-in', (event) => {
  event.stopPropagation()
  showNotification(event.detail.message, event.detail.type)
})

sessionController(session)
loginController(loginForm)
