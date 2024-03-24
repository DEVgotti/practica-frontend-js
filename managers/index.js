import { sessionController } from '../modules/session/session-controller.js'
import { announceListController } from '../modules/announces/announce-list/AnnounceListController.js'
import { notificationController } from '../modules/notification/notification-controller.js'

const notificationList = document.querySelector('.notification-list')
const session = document.querySelector('#session')
const announceList = document.querySelector('.announce-list')

const { showNotification } = notificationController(notificationList)

sessionController(session)

announceList.addEventListener('error-loading-announce', (event) => {
  showNotification(event.detail.message, event.detail.type)
  event.stopPropagation()
})

announceListController(announceList)
