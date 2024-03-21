export const buildAnonymousSession = () => {
  alert('1')
  return `<ul>
    <li>Login</li>
    <li>Signup</li>
  </ul>`
}

export const buildAuthenticatedSession = () => {
  alert('2')
  return `<ul>
    <li>Crear anuncio</li>
    <li><button>Cerrar sesión</button></li>
  </ul>`
}
