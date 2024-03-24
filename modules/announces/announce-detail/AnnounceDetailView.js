export function buildAnnounceDetail(announce) {
  return `
  <div class="announce_detail">
    <h1>${announce.title}</h1>
    <h2>${announce.type} por ${announce.price}</h2>
    <div><img width="300" src="${announce.image}" /></div>
    <div>${announce.desc}</div>
  </div>
  `
}
