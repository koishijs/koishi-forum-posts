const { readdirSync, writeFileSync } = require('fs')
const index = require('./index_trim')

const dir = Object.fromEntries(['basement', 'manage', 'business', 'entertainment'].reduce((a, b) => {
  a.push(...readdirSync('plugins/categories/' + b).map(v => [v.slice(0, -5), `./categories/${b}/${v}`]))
  return a
}, []))

const Categories = {
  // 一级
  'basement': '基础功能',
  'business': '业务逻辑',
  // 'manage': '',
  'entertainment': '娱乐功能',
}

const categories = {
  // 二级
  'core': '核心功能',
  'adapter': '适配器',
  'database': '数据库',
  'assets': '资源存储',
  'extension': '扩展功能',

  'manage': '管理工具',
  'console': '控制台',
  'preset': '行为预设',
  'censor': '内容审查',

  'tools': '业务逻辑',
  'search': '搜索服务',
  'subscribe': '订阅服务',
  'translator': '翻译服务',

  'fun': '趣味',
  'minigame': '小游戏',
  'adventure': '大型互动',
  'ai': 'AI 服务',
  'gametool': '游戏服务',
  'image': '图片服务',
}

let text = ''
let categorized = []
for (let [category, name] of Object.entries(categories)) {
  const directory = dir[category]
  let plugins = require(directory)
  text += `\n<a name="${category}"></a>\n\n## ${name}\n\n| 插件名 | 评分 |\n|-|-|\n`
  categorized.push(...plugins.shown, ...plugins.hidden)
  const pluginSort = (a, b) => {
    name1 = a.replace(/@[\w-]+\//, '')
    name2 = b.replace(/@[\w-]+\//, '')
    return name1 > name2 ? 1 : -1
  }
  plugins.shown.sort(pluginSort)
  plugins.hidden.sort(pluginSort)
  writeFileSync('plugins/' + directory, JSON.stringify(plugins, null, 2), 'utf-8')
  for (let plugin of plugins.shown) {
    text += `| ${plugin} | ${index[plugin]} |\n`
  }
}

let full = Object.entries(index).map(([k]) => k)
let removed = categorized.filter(a => full.every(b => a !== b))
let uncategorized = full.filter(a => categorized.every(b => a !== b))

writeFileSync('plugins/todo.json', JSON.stringify({
  removed: removed,
  uncategorized: uncategorized
}, null, 2), 'utf-8')
writeFileSync('plugins/index.md', text, 'utf-8')
