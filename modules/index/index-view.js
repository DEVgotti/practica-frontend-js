export function buildAnnounce(announce) {
  return `<div>
    <img src="${announce.image}" />
    <span><a href="view-announce.html?announceId=${announce.id}">${announce.title}</a></span>
    <span>${announce.type} por ${announce.price}€</span>
  </div>
  `
}
