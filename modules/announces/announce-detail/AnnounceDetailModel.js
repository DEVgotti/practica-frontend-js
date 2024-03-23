export async function getAnnounceDetail(announceId) {
  try {
    const response = await fetch(`http://192.168.1.129:8000/api/announces/${announceId}`)
    const data = await response.json()
    const announce = {
      title: data.title,
      price: data.price,
      image: data.image,
      type: data.type,
      desc: data.description,
    }

    return announce
  } catch (error) {}
}
