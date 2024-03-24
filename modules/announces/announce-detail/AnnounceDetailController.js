import { getAnnounceDetail } from './AnnounceDetailModel.js'
import { buildAnnounceDetail } from './AnnounceDetailView.js'
import { dispatchEvent } from '../../../utils/dispatchEvent.js'
import { loaderController } from '../loader/loader-controller.js'

export async function announceDetailController(announceDetail) {
  const spinner = loginForm.querySelector('#loader')
  const { showLoader, hideLoader } = loaderController(spinner)

  const params = new URLSearchParams(window.location.search)
  const announceId = params.get('announceId')

  if (!announceId) {
    window.location.href = './index.html'
  }

  try {
    showLoader()
    const announce = await getAnnounceDetail(announceId, announceDetail)
    const details = announceDetail.querySelector('#details')
    details.innerHTML = buildAnnounceDetail(announce)
  } catch (error) {
    dispatchEvent(
      'error-showing-announce',
      {
        message: error,
        type: 'error',
      },
      announceDetail
    )
  } finally {
    hideLoader()
  }
}
