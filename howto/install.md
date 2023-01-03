# Koishi 安装方式大全

这篇我将要介绍安装和使用 Koishi 的所有方式及其优缺点 (所有！)

- [Koishi 安装方式大全](#koishi-安装方式大全)
  - [Koishi Desktop 启动器](#koishi-desktop-启动器)
  - [Koishi Android 启动器](#koishi-android-启动器)
  - [路由器或 NAS 面板安装](#路由器或-nas-面板安装)
  - [模板项目安装 (专业)](#模板项目安装-专业)

## Koishi Desktop 启动器

在 Windows、MacOS 和有桌面环境的 Linux 上使用 Koishi Desktop 的安装包进行安装是最为合适的，它会帮你处理所有的环境问题和需要的软件，保证舒适的使用流程，打开[官网的下载界面](https://koishi.chat/manual/starter/windows.html)即可取得，只需要一路确定和等待就可以完成安装 (**请不要中途取消哦**)

> 对于没有桌面环境的 Linux (服务器)，你需要在 [Koishi Desktop 的配置文件](https://koishi.ilharper.com/faq/14)中加入一行 `mode: cli` 来开启无图形模式

## Koishi Android 启动器

Android 上使用 Koishi Android 的安装包进行安装是最为方便的，它也会帮你处理所有的环境问题和需要的软件，保证舒适的使用流程，打开[官网的下载界面](https://koishi.chat/manual/starter/android.html)即可取得

但是需要注意的是，安装包有两个版本，一个携带了浏览器环境，一个不携带浏览器环境，需要使用 puppeteer 相关插件的同学一定要**使用更大的那个版本**，不知道自己会不会用到的同学如果没有容量限制的话最好也要**使用更大的那个版本**，因为签名不同数据不方便互通

> 因为 Android 的权限管理严格，如果需要对机器人进行备份的话需要使用 Koishi Android 内部的导入导出功能来完成

> Koishi Android 使用过程中，最好能保持开在前台和屏幕常亮，如果无法做到也要尽量打开后台锁和关闭省电优化

## 路由器或 NAS 面板安装

对于有的希望在路由器或 NAS 上的 Docker 里安装 Koishi 的非专业用户，可以使用[位于 Docker Hub 的官方镜像](https://hub.docker.com/r/koishijs/koishi)，**在其他安装方式可用**的情况下**不推荐**使用，问题可能无法简单的解决或者让人感觉很麻烦

镜像也分为两个版本，对于没有空间压力的同学仍然建议**直接选择更大的版本**，要从 Docker Hub 下载镜像很有可能需要*更好的网络环境*

> 容器只需要映射端口就可以启动，但是对于有些限制严格的面板，需要手动勾选一些权限才能正常使用

> 所有的数据都保存在容器的内部，意味着销毁容器或者更改镜像不会继承数据，需要升级应该在网页界面里更新而不是更新镜像，想要取出或者放入数据会稍微有一些麻烦，未来可能会有单独的帖子来解决相关的问题

> 这并不是 Docker 的正确使用方式，而是一种权宜之计，还不懂怎么使用命令行操作 Docker 的人使用过程中可能会遇到一些困难，问题不一定能简单解决，但是你可以发帖寻求其他人的帮助

## 模板项目安装 (专业)

对于开发者来说，模板项目安装是唯一的选择，使用这种方式需要一定的命令行使用经验，对于其他人来讲，如果没有遇到其他方法无法解决的问题**不应该**使用这种方式 (意思是可能会有**不必要**的**麻烦**)

想要使用模板项目安装，需要按照[官网文档](https://koishi.chat/manual/starter/boilerplate.html)的指引，先安装 Node.js 再创建模板项目，创建时会询问一些问题，如果不理解什么意思的话可以直接按回车

如果创建模板项目的过程中遇到了网络问题，你可以在 `yarn create koishi` 之后加上 `-m https://ghproxy.com/https://github.com/` 变成 `yarn create koishi -m https://ghproxy.com/https://github.com/`

项目最终会出现在你的命令行运行目录底下的一个新目录里然后自动运行，如果你一路回车的话就会叫做 `koishi-app`，或者是你自己取的名字，以后要启动 Koishi 时要进入到这个目录里运行 `yarn start` 或者 `yarn dev`

值得一提的是，对于想要在安卓上跑机器人又想自己管理数据的人来讲，在 Termux 里安装模板项目是不错的选择 (提醒：这也需要全程使用命令行)