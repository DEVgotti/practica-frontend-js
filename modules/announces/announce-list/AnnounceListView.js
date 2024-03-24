export function buildAnnounce(announce) {
  return `<div class="announce">
      <img width="300" src="${announce.image}" />
      <h3><a href="view-announce.html?announceId=${announce.id}">${announce.title}</a></h3>
      <span>${announce.type} por ${announce.price}€</span>
    </div>
  `
}

export function buildEmptyAnnounceList() {
  return '<h3>Lo sentimos, no hay anuncios en este momento.</h3>'
}
