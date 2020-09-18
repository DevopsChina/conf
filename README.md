## 工作说明 SOW


### 目标结果说明

目标网站网址： https://conf.devopsmeetup.com/ 这是社区官网的一个二级域名，已经配置好了，部署在一个腾讯云赞助的虚拟机上。

网站的代码库： https://github.com/DevopsChina/conf.git

网站模板的演示站点： https://hoverboard-master.web.app/ 「墙外」

希望可以在 GitHub 上通过 Action 的 CI 功能直接持续部署到目标的网站服务器。

### [SOW] 工作范围说明

* 本地化这个 Google 的开发者会议模板
  * 评估这个模板的可用性，如果在墙内用不了，需要找类似的替代品，但是下面的网页内容更新部分不变。
  * 汉化
  * 替换依赖的墙外的库和资源
  * 替换 google 地图为百度地图
  * sign in 的功能不是必须的（待前端开发评估工作量后决定取舍）
* 主页文字和内容的编辑和初始化填充，一个很长的页面。
* 日程页面的编辑和初始化填充，一个很长的页面，内容比较多，随着日程的搭建逐步更新。
* 讲师页面的编辑和初始化填充，一个很长的页面，内容比较多，随着日程的搭建逐步更新。
* 团队页面的编辑和初始化填充，一个比较短的页面，内容不多，不变。
* 博客文章的更新，会前会后的相关信息的发布，最多不会超过 4 条新闻。
* 相关人员头像图片，页面上所有图片的处理，需要简单的图片处理技能，处理不了的或者需求美工参与的图片，提交需求给社区的美工统一设计替换。
* 会后经常瞬间总结文案和图片的上传，本年度的更新结束
* 为下一年的更新做一些规划和设计，将 2020 年度的网站归档到 https://conf.devopsmeetup.com/2020/ 的目录中；将首页更新为 2021 年的赞助商招募状态。
* 基于腾讯云提供的 CDN 优化网站的打开速度，目标部署的 web 服务器也在腾讯云上。

工作量评估：

* 工期 10 月， 11 月，12 月；为期 3 个月。
* 开发者需求数量：2 名前端开发
* 总工时概算：网站发布初期需要 2 人全职工作，3 周完成初始化发布工作。网站发布以后，进入日常更新和维护期。更新阶段需要一个人每周工作两天，随着日程的进展更新讲师和日程的资料。
* 总工作量 3 个人月。 下一年 2021 年需要 1.5 个人月。


<p align="center">
<img width="800px" src="https://user-images.githubusercontent.com/2954281/42683571-55ba6be6-8696-11e8-8ff7-e9acd0db63e8.png">
</p>
<p align="center">
<a href="https://hoverboard-master.web.app" align="center">:zap: Live demo</a>&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="#getting-started">:rocket: Get Started</a>
</p>

[![Build Status](https://github.com/gdg-x/hoverboard/workflows/Pre%20Merge%20Checks/badge.svg)](https://github.com/gdg-x/hoverboard/actions) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgdg-x%2Fhoverboard.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgdg-x%2Fhoverboard?ref=badge_shield)[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7973ac656dc94e42858ce640bb02de58)](https://www.codacy.com/app/pamuditha/hoverboard?utm_source=github.com&utm_medium=referral&utm_content=pamuditha/hoverboard&utm_campaign=Badge_Grade)

## Overview

Project Hoverboard is the conference website template that helps you to set up a mobile-first conference website with blog, speaker and schedule management in a few minutes.

The template is created based on 7 years of [GDG Lviv](https://www.meetup.com/GDG-Lviv/) team experience of running conferences and feedback from more than 500 event organizers from all around the world who were using previous Hoverboard versions.

Our goal is to allow event organizers to set up a professional conference website with minimum resources. To get started you need only basic knowledge of web technologies and a free Firebase account.

## Features

| Feature                              | Description                                                                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **Fast and optimized**               | 91/100 PWA on [Lighthouse](https://www.webpagetest.org/lighthouse.php?test=180111_1P_027a041bc5102982f074014807320a86&run=3) |
| **Works offline**                    | shitty WiFi on the venue is not a problem anymore                                                                            |
| **Mobile-first**                     | layouts optimized for small screens, Hoverboard can be installed as a native app on your phone                               |
| **Push notifications**               | remind about sessions in My schedule, session feedback or target users with a custom message                                 |
| **SEO optimized**                    | index all content and get to the top in search results                                                                       |
| **Speakers and schedule management** | keep and update all information in the Firebase                                                                              |
| **My schedule**                      | let attendees save sessions they want to visit                                                                               |
| **Customizable theme**               | change colors to match your style                                                                                            |
| **Blog**                             | post announcements, updates and useful information                                                                           |

## Getting Started

:first_quarter_moon_with_face: Read the [set up guide](/docs/tutorials/00-set-up.md) or checkout the [full documentation](/docs/).

## Updating

Here is a git workflow for updating your fork (or downloaded copy) to the latest version:

```console
git remote add upstream https://github.com/gdg-x/hoverboard.git
git fetch upstream
git merge upstream/main
# resolve the merge conflicts in your editor
git add . -u
git commit -m 'Updated to the latest version'
```

## Documentation

The [Getting Started guide](#getting-started) is probably a good first point of call! <br>
:book: [Full documentation](/docs/).

## Compatibility

:white_check_mark: Compatible with **latest two** major versions of of browsers that support [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

## Technology Stack

- Polymer 3
- Redux
- Firebase
- Service Worker
- CSS Grid

## Contributing

Awesome! Contributions of all kinds are greatly appreciated. To help smoothen the process we have a few non-exhaustive guidelines to follow which should get you going in no time.

### Good First Issue

Issues labeled [`good first issue`](https://github.com/gdg-x/hoverboard/labels/good%20first%20issue) are a great way to ease into development on this project.

### Help Wanted Label

Any other issue labeled [`help wanted`](https://github.com/gdg-x/hoverboard/labels/help%20wanted) is ready for a PR.

### Using GitHub Issues

- Feel free to use GitHub issues for questions, bug reports, and feature requests
- Use the search feature to check for an existing issue
- Include as much information as possible and provide any relevant resources (Eg. screenshots)
- For bug reports ensure you have a reproducible test case
- A pull request with a breaking test would be super preferable here but isn't required

### Submitting a Pull Request

- Squash commits
- Lint your code with eslint (config provided)
- Include relevant test updates/additions

## Code of Conduct

Read the full version [Code of Conduct](/.github/CODE_OF_CONDUCT.md).

## Contributors

**Maintainer:** [Abraham Williams](https://github.com/abraham)
**Authors:** [Oleh Zasadnyy](https://github.com/ozasadnyy) and [Sophie Huts](https://github.com/sophieH29).

This project exists thanks to all the [people who contribute](https://github.com/gdg-x/hoverboard/graphs/contributors). [[Contribute](/.github/CONTRIBUTING.md)].

<a href="https://github.com/gdg-x/hoverboard/graphs/contributors"><img src="https://opencollective.com/hoverboard/contributors.svg?width=890" /></a>

## Sponsoring

Most of the core team members, hoverboard contributors and contributors in the ecosystem do this open-source work in their free time. If you like this project and it makes your life easier, please donate.
<a href="https://opencollective.com/hoverboard#backers" target="_blank"><img src="https://opencollective.com/hoverboard/backers.svg?width=890"></a>

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgdg-x%2Fhoverboard.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgdg-x%2Fhoverboard?ref=badge_large)

The project is published under the [MIT license](/LICENSE.md).
Feel free to clone and modify repo as you want, but don't forget to add a reference to authors :)

_GDG[x] is not endorsed and/or supported by Google, the corporation._
