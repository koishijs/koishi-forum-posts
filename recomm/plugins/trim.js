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
    let name = v.name.replace(/(koishi-|@koishijs\/)plugin-/, '')
    let res = `- ${name} [![评分](https://badge.koishi.chat/rating/${v.name})](${v.links.npm})`
    if (v.name.includes('@koishijs/') || v.verified)
      res += ' ![受认证|16x16](upload://nEu5NpYObSUxSNq2YszbREIgDoE.png)'
    // if (v.insecure) 已有颜色区分
    //   res += ' ![不安全|16x16](upload://puVx64WRItNaep7Ta8zFV3oa4Q2.png)'
    return res
  }).join('\n'), 'utf-8')
