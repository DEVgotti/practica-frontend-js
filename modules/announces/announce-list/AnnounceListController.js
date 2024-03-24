import { getAnnounces } from './AnnounceListModel.js'
import { buildAnnounce, buildEmptyAnnounceList } from './AnnounceListView.js'
import { dispatchEvent } from '../../../utils/dispatchEvent.js'
import { loaderController } from '../../loader/loader-controller.js'

export async function announceListController(announceList) {
  const spinner = announceList.querySelector('#loader')
  const { showLoader, hideLoader } = loaderController(spinner)

  try {
    showLoader()
    const announces = await getAnnounces()
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
  } finally {
    hideLoader()
  }
}

function renderAnnounces(announces, announceList) {
  announces.forEach((announce) => {
    const announceItem = document.createElement('div')
    announceItem.innerHTML = buildAnnounce(announce)
    announceList.appendChild(announceItem)
  })
}
