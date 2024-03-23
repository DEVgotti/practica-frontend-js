import { getAnnounceDetail } from './AnnounceDetailModel.js'
import { buildAnnounceDetail } from './AnnounceDetailView.js'

export async function announceDetailController(announceDetail) {
  const params = new URLSearchParams(window.location.search)
  console.log(params)
  const announceId = params.get('announceId')

  try {
    const announce = await getAnnounceDetail(announceId)
    const details = announceDetail.querySelector('#details')
    details.innerHTML = buildAnnounceDetail(announce)
  } catch (error) {
    alert(error)
  }
}
