export const buildAnonymousSession = () => {
  return `<ul>
    <li><a href="./login.html">Login</a></li>
    <li><a href="./register.html">Signup</a></li>
  </ul>`
}

export const buildAuthenticatedSession = () => {
  return `
    <div><a href="./index.html">Lista de anuncios</a></div>
    <div><a href="./create-announce.html">Crear anuncio</a></div>
    <div><button>Cerrar sesión</button></div>
  `
}
