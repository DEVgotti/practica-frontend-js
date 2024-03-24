import { deleteAnnounce, getAnnounceDetail } from './AnnounceDetailModel.js'
import { buildAnnounceDetail } from './AnnounceDetailView.js'
import { dispatchEvent } from '../../../utils/dispatchEvent.js'
import { loaderController } from '../../loader/loader-controller.js'
import { getUserdata } from '../../../utils/userdata.js'

export async function announceDetailController(announceDetail) {
  const spinner = announceDetail.querySelector('#loader')
  const { showLoader, hideLoader } = loaderController(spinner)

  const params = new URLSearchParams(window.location.search)
  const announceId = params.get('announceId')

  if (!announceId) {
    window.location.href = './index.html'
  }

  try {
    showLoader()
    const announce = await getAnnounceDetail(announceId, announceDetail)
    handleRemoveAnnounceButton(announceDetail, announce)
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

  async function handleRemoveAnnounceButton(announceDetail, announce) {
    const token = localStorage.getItem('token')
    const userdata = await getUserdata(token)
    const removeAnnounceButton = announceDetail.querySelector('#removeAnnounce')

    console.log(announce)
    if (announce.userId === userdata.id) {
      removeAnnounceButton.classList.remove('hidden')
      removeAnnounceButton.addEventListener('click', () => {
        removeAnnounce(announce.id, token)
      })
    } else {
      removeAnnounceButton.classList.add('hidden')
    }
  }

  async function removeAnnounce(announceId, token) {
    if (window.confirm('¿Seguro que quieres borrar este anuncio?')) {
      try {
        await deleteAnnounce(announceId, token)

        setTimeout(() => {
          window.location.href = 'index.html'
        }, 2000)
      } catch (error) {
        dispatchEvent(
          'error-remove-announce',
          {
            message: error,
            type: 'error',
          },
          announceDetail
        )
      }
    }
  }
}
