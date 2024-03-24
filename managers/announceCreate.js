import { announceCreationController } from '../modules/announces/announce-create/AnnounceCreateController.js'
import { notificationController } from '../modules/notification/notification-controller.js'

const token = localStorage.getItem('token')

if (!token) {
  window.location.href = 'index.html'
}

const notificationList = document.querySelector('.notification-list')
const announceCreation = document.querySelector('#new-announce')

const { showNotification } = notificationController(notificationList)

announceCreation.addEventListener('error-creating-announce', (event) => {
  event.stopPropagation()
  showNotification(event.detail.message, event.detail.type)
})
announceCreationController(announceCreation)
