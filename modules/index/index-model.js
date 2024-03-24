export async function getAnnounces() {
  let announces = []
  try {
    const response = await fetch('http://192.168.1.129:8000/api/announces')
    const data = await response.json()
    announces = parseAnnounces(data)
  } catch (error) {
    throw new Error('Error obteniendo anuncios')
  }

  return announces
}

function parseAnnounces(data) {
  let announceType

  return data.map((data) => {
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

    return {
      id: data.id,
      title: data.title,
      price: data.price,
      image: data.image,
      type: announceType,
      desc: data.description,
    }
  })
}
