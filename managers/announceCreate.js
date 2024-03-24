import { announceCreationController } from '../modules/announces/announce-create/AnnounceCreateController.js'

const token = localStorage.getItem('token')

if (!token) {
  window.location.href = 'index.html'
}

const announceCreation = document.querySelector('#new-announce')

announceCreation.addEventListener('error-creating-announce', (event) => {
  // showNotification
  event.stopPropagation()
})
announceCreationController(announceCreation)
