const { readdirSync, writeFileSync } = require('fs')
const index = require('./index_trim')

const dir = Object.fromEntries(['core', 'manage', 'tools', 'entertainment'].reduce((a, b) => {
  a.push(...readdirSync('plugins/categories/' + b).map(v => [v.slice(0, -5), `./categories/${b}/${v}`]))
  return a
}, []))
const categories = {
  'core': '核心功能',
  'adapter': '适配器',
  'database': '数据库',
  'assets': '资源存储',
  'network': '网络服务',
  'manage': '管理工具',
  'console': '控制台',
  'preset': '行为预设',
  'censor': '内容审查',
  'extension': '扩展功能',
  'tools': '业务逻辑',
  'search': '搜索服务',
  'subscribe': '订阅服务',
  'ai': 'AI 服务',
  'gametool': '游戏服务',
  'image': '图片服务',
  'translator': '翻译服务',
  'entertainment': '娱乐功能',
  'minigame': '小游戏',
  'meme': '模因',
  'adventure': '大型互动',
}

let text = ''
for (let [category, name] of Object.entries(categories)) {
  let { shown } = require(dir[category])
  text += `<a name="${category}"></a>\n\n## ${name}\n\n| 插件名 | 评分 |\n`
  shown.sort((a, b) => {
    name1 = a.replace(/@[\w-]+\//, '')
    name2 = b.replace(/@[\w-]+\//, '')
    return name1 > name2 ? 1 : -1
  })
  for (let plugin of shown) {
    text += `| ${plugin} | ${index[plugin]} |\n`
  }
  text += '\n'
}
writeFileSync('plugins/index.md', text, 'utf-8')
