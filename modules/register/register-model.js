const User = () => {
  async function createUser(username, password) {
    const response = await fetch('http://192.168.1.126:8000/auth/register', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })

    if (response.ok) throw new Error('No se pudo crear el usuario.')
  }

  return {
    createUser,
  }
}
