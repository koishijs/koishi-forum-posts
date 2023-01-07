# 来看看Koishi好用的插件！~IlHarper的Koishi插件大盘点~ 解析链接篇

在这个帖子要给大家介绍 Koishi 插件市场中的解析插件，之后有新的插件也会在这里更新！

> \*插件使用例图火热征集中！\*

首次更新是 2023 年 1 月 4 日，本次带来 5 个解析插件

- [B 站视频解析](#bvid)
- [Youtube 视频解析](#youtube)
- [V2EX 解析](#v2ex)
- [Twitter 解析](#twitter)
- [Instagram 解析](#instagram)

<a name="bvid"></a>

## B 站视频解析

插件市场搜索: `bvid`

> 这个插件由我们的 [@Shigma](https://github.com/shigma) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/koishijs/koishi-plugin-bvid)观摩学习和标星

插件会检测聊天中的 BV 号或者形如 `b23.tv/xxxxx` 格式的链接，转化成 AV 号链接并且和封面一起发送

> 目前还没有解析视频其他信息的功能，有没有小伙伴愿意贡献呢?

<a name="youtube"></a>

## Youtube 视频解析

插件市场搜索: `youtube`

> 这个插件由我们的 [@tediorelee](https://github.com/tediorelee) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/tediorelee/koishi-plugin-youtube)观摩学习和标星

插件会解析聊天中的 Youtube 链接，发送封面、标题、频道、发布时间和标签

> 需要注意的是，要使用这个插件需要一个 Youtube API Key，我目前还没有用上所以不清楚具体流程，有没有用上的小伙伴分享一下流程呢

<a name="v2ex"></a>

## V2EX 解析

插件市场搜索: `v2ex`

> 这个插件由我们的 [@tediorelee](https://github.com/tediorelee) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/tediorelee/koishi-plugin-v2ex)观摩学习和标星

插件会解析聊天中的 V2EX 链接，发送节点、标题和内容

> 需要注意的是，要使用这个插件需要一个 V2EX Auth Token，我目前还没有用上所以不清楚具体流程，有没有用上的小伙伴分享一下流程呢

<a name="twitter"></a>

## Twitter 解析

插件市场搜索: `twitter-images-videos`

> 这个插件由我们的 [@tediorelee](https://github.com/tediorelee) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/tediorelee/koishi-plugin-twitter-images-videos)观摩学习和标星

插件会解析聊天中的推特链接，发送其中的内容 (作者、文字、图片、视频)

> 需要注意的是，要使用这个插件需要一个 Twitter Auth Token，我目前还没有用上所以不清楚具体流程，有没有用上的小伙伴分享一下流程呢

<a name="instagram"></a>

## Instagram 解析

插件市场搜索: `instagram-image-video-downloader`

> 这个插件由我们的 [@tediorelee](https://github.com/tediorelee) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/tediorelee/koishi-plugin-instagram-downloader)观摩学习和标星

插件会解析聊天中的 Instagram 链接，发送其中的图片 (虽然叫做 image video downloader 不过目前确实是只会发图片呢)
