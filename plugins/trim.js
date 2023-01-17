const { writeFileSync } = require('fs')
const { objects } = require('./index.json')
const keys = ['name', 'links', 'keywords', 'portable', 'insecure']
let list = objects.filter((v) => {
  if (v.package.keywords?.includes('market:hidden'))
    return false
  if (v.ignored)
    return false
  return true
}).map(v => {
  let name = v.package.name.replace(/(koishi-|@koishijs\/)plugin-/, '')
  let rating = `[![评分](https://badge.koishi.chat/rating/${v.package.name})](${v.package.links.npm})`
  rating += (v.package.name.includes('@koishijs/') || v.verified) ? ' ![受认证|16x16](upload://nEu5NpYObSUxSNq2YszbREIgDoE.png)' : ''
  return [name, rating]
}).sort((a, b) => {
  name1 = a[0].replace(/@[\w-]+\//, '')
  name2 = b[0].replace(/@[\w-]+\//, '')
  return name1 > name2 ? 1 : -1
}).reduce((a, b) => {
  return {...a, [b[0]]: b[1]}
}, {})

writeFileSync('plugins/index_trim.json', JSON.stringify(list, null, 2), 'utf-8')
writeFileSync('plugins/index.md',
  Object.entries(list).map(v => `| ${v[0]} | ${v[1]} |`).join('\n'), 'utf-8')
