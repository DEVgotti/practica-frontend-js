import { dispatchEvent } from '../../../utils/dispatchEvent.js'

export async function getAnnounceDetail(announceId, announceDetail) {
  try {
    let announceType = ''
    const response = await fetch(`http://192.168.1.129:8000/api/announces/${announceId}`)
    const data = await response.json()

    switch (data.type) {
      case '1':
        announceType = 'Se vende'
        break
      case '2':
        announceType = 'Se busca'
        break
      default:
        announceType = 'Tipo no válido'
        break
    }

    const announce = {
      title: data.title,
      price: data.price,
      image: data.image,
      type: announceType,
      desc: data.description,
    }

    return announce
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
