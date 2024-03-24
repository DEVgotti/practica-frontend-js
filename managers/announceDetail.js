import { sessionController } from '../modules/session/session-controller.js'
import { announceDetailController } from '../modules/announces/announce-detail/AnnounceDetailController.js'
import { notificationController } from '../modules/notification/notification-controller.js'

const session = document.querySelector('#session')
const notificationList = document.querySelector('.notification-list')
const announceDetail = document.querySelector('#announce-detail')

const { showNotification } = notificationController(notificationList)

announceDetail.addEventListener('error-showing-announce', (event) => {
  event.stopPropagation()
  showNotification(event.detail.message, event.detail.type)
})

sessionController(session)
announceDetailController(announceDetail)
