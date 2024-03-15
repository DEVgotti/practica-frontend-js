import { loginUser } from './login-model.js'

export const loginController = (loginForm) => {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault()

    handleLoginSubmit(loginForm)
  })

  const handleLoginSubmit = async (loginForm) => {
    const { username, password } = getLoginData(loginForm)
  }

  const getLoginData = (loginForm) => {
    const formData = new FormData(loginForm)
    const username = formData.get('username')
    const password = formData.get('password')

    return {
      username,
      password,
    }
  }
}
