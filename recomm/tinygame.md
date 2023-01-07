# 来看看Koishi好用的插件！~IlHarper的Koishi插件大盘点~ 小游戏篇

在这个帖子要给大家介绍 Koishi 插件市场中的小游戏插件，之后有新的插件也会在这里更新！

> \*插件使用例图火热征集中！\*

首次更新是 2023 年 1 月 3 日，本次带来 4 个小游戏插件

- [娶群友](#marry)
- [下棋](#chess)
- [猜单词](#hangman)
- [猜数字](#guess-number)

<a name="marry"></a>

## 娶群友

插件市场搜索: `marry`

> 这个插件由我们的 [@Seidko](https://github.com/Seidko) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/koishijs/koishi-plugin-marry)观摩学习和标星

这个插件提供了随机和群友配对喜结连理的功能，非常具有互动性和娱乐性，是活跃群聊的良好帮手，并且不容易滥用
插件配置独立提供了自定义结婚指令的能力，默认是 `今日老婆`

<a name="chess"></a>

## 下棋

插件市场搜索: `chess`

> 这个插件由我们的 [@Shigma](https://github.com/shigma) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/koishijs/koishi-plugin-chess)观摩学习和标星

这个插件提供了 `chess` 命令，让我们可以在群聊中游玩经典的五子棋、象棋和围棋，让群聊充满博弈和指指点点
插件使用 `puppeteer` 插件 来实现漂亮的渲染效果，如果你想要图片模式，你就需要启用 `puppeteer` 插件并保证它正常运行

<a name="hangman"></a>

## 猜单词

插件市场搜索: `hangman`

> 这个插件由我们的 [@Shigma](https://github.com/shigma) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/koishijs/koishi-plugin-hangman)观摩学习和标星

这个插件提供了 `hangman` 命令，让我们可以和机器人游玩经典的猜单词游戏，插件什么都不需要，非常的小巧，并且可以在群聊中同时游玩

```text
hangman [letter]
猜单词
别名：hang，dsg。
系统将生成一个随机的英文词汇，玩家的目标是猜出这个词，共有 10 次尝试机会。
每次可以猜测一个字母，如果在词中出现则会提示出现位置，否则会消耗一次尝试机会。尝试机会用完则游戏失败。
可用的选项有：
    -q, --quit  退出游戏 (不计入调用)
```

<a name="guess-number"></a>

## 猜数字

插件市场搜索: `guess-number`

> 这个插件由我们的 [@Shigma](https://github.com/shigma) 为大家实现
> 有兴趣学习的小伙伴可以前往[源代码地址](https://github.com/koishijs/koishi-plugin-guess-number)观摩学习和标星

这个插件提供了 `guess` 命令，让我们可以和机器人游玩经典的猜数字游戏，插件什么都不需要，非常的小巧，并且可以在群聊中同时游玩

```text
guess [...number]
猜数字
别名：csz。
输入要猜测的数字，将得到一个形如 xAyB 的匹配结果：
x 为本次猜测的四位数字中，答案包含的且所处位置正确的数字个数；
y 为本次猜测的四位数字中，答案包含的但所处位置不正确的数字个数。
例如：生成的数字为 0637，猜测 2730，则返回 1A2B。
这是因为 3 在答案中包含且位置正确，7 和 0 在答案中包含但位置不正确。
可用的选项有：
    -b, --base <base>  设置进制数
    -l, --length <length>  设置答案长度
    -c, --chances <count>  设置猜测次数
    -q, --quit  退出游戏 (不计入调用)
```
