const { writeFileSync } = require('fs')
const { objects } = require('./index.json')
const keys = ['name', 'links', 'keywords', 'portable', 'insecure']
let list = objects.map(v => {
  let res = Object.fromEntries(keys.map(k => [k, v.package[k]]))
  res.ignored = v.ignored ?? false
  res.verified = v.verified ?? false
  return res
}).filter((v) => {
  if (v.keywords?.includes('market:hidden'))
    return false
  if (v.ignored)
    return false
  return true
}).sort((a, b) => a.name > b.name ? 1 : -1)

writeFileSync('./recomm/plugins/index_trim.json', JSON.stringify(list, null, 2), 'utf-8')
writeFileSync('./recomm/plugins/index.md',
  list.map(v => {
    v.name_trim = v.name.replace(/(koishi-|@koishijs\/)plugin-/, '')
    v.rating = `[![评分](https://badge.koishi.chat/rating/${v.name})](${v.links.npm})`
    v.badge = (v.name.includes('@koishijs/') || v.verified) ? ' ![受认证|16x16](upload://nEu5NpYObSUxSNq2YszbREIgDoE.png)' : ''
    return v
  }).sort((a, b) => {
    name1 = a.name_trim.replace(/@[\w-]+\//, '')
    name2 = b.name_trim.replace(/@[\w-]+\//, '')
    return name1 > name2 ? 1 : -1
  }
  ).map(v => {
    return `| ${v.name_trim} | ${v.rating}${v.badge} |`
  }).join('\n'), 'utf-8')
