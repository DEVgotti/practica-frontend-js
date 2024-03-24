import { sessionController } from '../modules/session/session-controller.js'
import { announceCreationController } from '../modules/announces/announce-create/AnnounceCreateController.js'
import { notificationController } from '../modules/notification/notification-controller.js'

const token = localStorage.getItem('token')

if (!token) {
  window.location.href = 'index.html'
}

const session = document.querySelector('#session')
const notificationList = document.querySelector('.notification-list')
const announceCreation = document.querySelector('#new-announce')

const { showNotification } = notificationController(notificationList)

announceCreation.addEventListener('error-creating-announce', (event) => {
  event.stopPropagation()
  showNotification(event.detail.message, event.detail.type)
})
announceCreation.addEventListener('success-creating-announce', (event) => {
  event.stopPropagation()
  showNotification(event.detail.message, event.detail.type)
})

sessionController(session)
announceCreationController(announceCreation)
