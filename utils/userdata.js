function parseUser(user) {
  return {
    id: user.id,
  }
}

export async function getUserdata(token) {
  try {
    const response = await fetch('http://192.168.1.129:8000/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()

    return parseUser(data)
  } catch (error) {
    throw new Error('Error eliminando anuncio')
  }
}
