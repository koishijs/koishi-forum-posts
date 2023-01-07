# 来看看Koishi好用的插件！~IlHarper的Koishi插件大盘点~ 帮我查篇

在这个帖子要给大家介绍 Koishi 插件市场中的查询插件，之后有新的插件也会在这里更新！

> \*插件使用例图火热征集中！\*

首次更新是 2023 年 1 月 4 日，本次带来 5 个查询插件 (原本有 10 个的但是有 5 个被我拆到另一个帖子去了)

- [以图搜图](#image-search)
- [音乐](#music)
- [豆瓣搜索](#douban)
- [天气](#weather)
- [数列查询](#oeis)

<a name="image-search"></a>

## 以图搜图

插件市场搜索: `image-search`

> 这个插件由我们的 [@Shigma](https://github.com/shigma) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/koishijs/koishi-plugin-image-search)观摩学习和标星

插件提供了 `search` 和 `saucenao` `ascii2d` `iqdb` 四个命令，可以综合或者分别使用三个引擎进行以图搜图并解析图片来源

> 需要注意的是，要使用这个插件应该先注册一个 saucenao 账号，进入 api 页面复制 api key 填入配置项

<a name="music"></a>

## 音乐

插件市场搜索: `music`

> 这个插件由我们的 [@Shigma](https://github.com/shigma) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/koishijs/koishi-plugin-music)观摩学习和标星

插件提供了 `music` 命令和 `来一手` `点一首` `整一首` 三个别名，可以在网易云音乐或者 QQ 音乐搜索歌曲并发出

<a name="douban"></a>

## 豆瓣搜索

插件市场搜索: `douban`

> 这个插件由我们的 [@Mahoo12138](https://github.com/Mahoo12138) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/Mahoo12138/koishi-plugin-douban)观摩学习和标星

插件提供了 `douban` 命令和 `-b` `-f` `-m` 三个选项，可以通过豆瓣搜索图书、电影和音乐，默认会搜索电影

<a name="weather"></a>

## 天气

插件市场搜索: `weather`

> 这个插件由我们的 [@Shigma](https://github.com/shigma) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/koishijs/koishi-plugin-weather)观摩学习和标星

插件提供了 `weather` 命令，可以通过经纬度查询某地的天气

> 虽然看起来没什么用，但是其实可以配合教学 (`dialogue`) 插件来快速查询某地的天气哦

<a name="oeis"></a>

## 数列查询

插件市场搜索: `oeis`

> 这个插件由我们的 [@Shigma](https://github.com/shigma) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/koishijs/koishi-plugin-oeis)观摩学习和标星

这个插件提供了一个 `oeis` 命令，可以通过 OEIS 网站搜索你想要的整数数列

> 请注意刷屏警告
