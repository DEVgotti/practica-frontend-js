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
      setTimeout(() => {
        window.location = 'index.html'
      }, 2000)
    } catch (error) {
      alert(error)
    }
  })
}
