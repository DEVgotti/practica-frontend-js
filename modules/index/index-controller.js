import { getAnnounces } from './index-model.js'
import { buildAnnounce } from './index-view.js'

export async function announceListController(announceList) {
  try {
    const announces = await getAnnounces()
    console.log(announces)
    if (announces.length > 0) {
      renderAnnounces(announces, announceList)
    }
  } catch (error) {
    alert(error)
  }
}

function renderAnnounces(announces, announceList) {
  announces.forEach((announce) => {
    const announceItem = document.createElement('div')
    announceItem.innerHTML = buildAnnounce(announce)
    announceList.appendChild(announceItem)
  })
}
