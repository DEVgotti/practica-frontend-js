import { getAnnounceDetail } from './AnnounceDetailModel.js'
import { buildAnnounceDetail } from './AnnounceDetailView.js'
import { dispatchEvent } from '../../../utils/dispatchEvent.js'

export async function announceDetailController(announceDetail) {
  const params = new URLSearchParams(window.location.search)
  const announceId = params.get('announceId')

  try {
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
  }
}
