const { writeFileSync } = require('fs')
const { objects } = require('./index.json')
const keys = ['name', 'links', 'keywords', 'portable', 'insecure']
let list = objects.map(v => {
  return Object.fromEntries(keys.map(k => [k, v.package[k]]))
}).filter((v) => {
  if (!v.keywords)
    console.log(v)
  return !v.keywords?.includes('market:hidden')
})
  .sort((a, b) => a.name > b.name ? 1 : -1)
writeFileSync('./recomm/plugins/index_trim.json', JSON.stringify(list, null, 2), 'utf-8')
writeFileSync('./recomm/plugins/index.md',
  list.map(v => {
    let name = v.name.replace(/(koishi-|@koishijs\/)plugin-/, '')
    return `- [${name}](${v.links.npm})${v.name.includes('@koishijs/') ? ' (官方)' : ''}`
  }).join('\n'), 'utf-8')
