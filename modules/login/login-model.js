export const loginUser = async (username, password, loginForm) => {
  const body = {
    username,
    password,
  }

  let response
  try {
    response = await fetch('http://192.168.1.129:8000/auth/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      method: 'POST',
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message)
    if (response.ok) return data.accessToken
  } catch (error) {
    dispatchEvent(
      'error-login-in',
      {
        message: error,
        type: 'error',
      },
      loginForm
    )
  }
}
