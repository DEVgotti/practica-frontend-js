import { dispatchEvent } from '../../../utils/dispatchEvent.js'
import { createAnnounce } from './AnnounceCreateModel.js'

export function announceCreationController(announceCreation) {
  announceCreation.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formData = new FormData(announceCreation)
    const title = formData.get('title')
    const price = formData.get('price')
    const image = formData.get('image')
    const type = formData.get('type')
    const description = formData.get('description')

    try {
      await createAnnounce(title, price, image, type, description)

      dispatchEvent(
        'success-creating-announce',
        {
          message: '¡Anuncio creado con éxito!',
          type: 'success',
        },
        announceCreation
      )

      setTimeout(() => {
        window.location = 'index.html'
      }, 2000)
    } catch (error) {
      dispatchEvent(
        'error-creating-announce',
        {
          message: error,
          type: 'error',
        },
        announceCreation
      )
    }
  })
}
