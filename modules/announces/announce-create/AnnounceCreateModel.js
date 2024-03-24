export const createAnnounce = async (title, price, image, type, description, userId) => {
  const token = localStorage.getItem('token')

  const body = {
    title,
    price,
    image,
    type,
    description,
    userId,
  }

  let response
  try {
    response = await fetch('http://192.168.1.129:8000/api/announces', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message)
    }
  } catch (error) {
    if (error.message) {
      throw error.message
    } else {
      throw error
    }
  }
}
