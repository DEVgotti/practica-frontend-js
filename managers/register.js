import { sessionController } from '../modules/session/session-controller.js'
import { registerController } from '../modules/register/register-controller.js'
import { notificationController } from '../modules/notification/notification-controller.js'

const notificationList = document.querySelector('.notification-list')
const registerForm = document.querySelector('#register-form')
const session = document.querySelector('#session')

const { showNotification } = notificationController(notificationList)

registerForm.addEventListener('error-signing-up', (event) => {
  event.stopPropagation()
  showNotification(event.detail.message, event.detail.type)
})

sessionController(session)
registerController(registerForm)
