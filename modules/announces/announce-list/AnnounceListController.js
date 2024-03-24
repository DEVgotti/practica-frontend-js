import { getAnnounces } from './AnnounceListModel.js'
import { buildAnnounce, buildEmptyAnnounceList } from './AnnounceListView.js'
import { dispatchEvent } from '../../../utils/dispatchEvent.js'

export async function announceListController(announceList) {
  try {
    const announces = await getAnnounces()
    console.log(announces)
    if (announces.length > 0) {
      renderAnnounces(announces, announceList)
    } else {
      announceList.innerHTML = buildEmptyAnnounceList()
    }
  } catch (error) {
    dispatchEvent(
      'error-loading-announces',
      {
        message: error,
        type: 'error',
      },
      announceList
    )
  }
}

function renderAnnounces(announces, announceList) {
  announces.forEach((announce) => {
    const announceItem = document.createElement('div')
    announceItem.innerHTML = buildAnnounce(announce)
    announceList.appendChild(announceItem)
  })
}
