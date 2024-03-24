import { sessionController } from '../modules/session/session-controller.js'
import { announceListController } from '../modules/index/index-controller.js'

const session = document.querySelector('#session')
const announceList = document.querySelector('.announce-list')

sessionController(session)

announceList.addEventListener('error-loading-announce', (event) => {
  // showNotification
  event.stopPropagation()
})

announceListController(announceList)
