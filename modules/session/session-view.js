export const buildAnonymousSession = () => {
  return `<ul>
    <li><a href="./login.html">Login</a></li>
    <li><a href="./register.html">Signup</a></li>
  </ul>`
}

export const buildAuthenticatedSession = () => {
  return `<ul>
    <li>Crear anuncio</li>
    <li><button>Cerrar sesión</button></li>
  </ul>`
}
