import { announceDetailController } from '../modules/announces/announce-detail/AnnounceDetailController.js'

const announceDetail = document.querySelector('#announce-detail')

announceDetail.addEventListener('error-showing-announce', (event) => {
  // showNotification
  event.stopPropagation()
})
announceDetailController(announceDetail)
