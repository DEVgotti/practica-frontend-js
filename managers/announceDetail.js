import { announceDetailController } from '../modules/announces/announce-detail/AnnounceDetailController.js'
import { notificationController } from '../modules/notification/notification-controller.js'

const notificationList = document.querySelector('.notification-list')
const announceDetail = document.querySelector('#announce-detail')

const { showNotification } = notificationController(notificationList)

announceDetail.addEventListener('error-showing-announce', (event) => {
  event.stopPropagation()
  showNotification(event.detail.message, event.detail.type)
})
announceDetailController(announceDetail)
