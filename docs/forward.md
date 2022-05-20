# Forward

## Copyright Statement

## Tools This Books Use

[Regulex](<https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24>)

[Processon](https://www.processon.com/)

[Vuepress](https://v2.vuepress.vuejs.org/)
[Github](https://github.com/js-regex-mini-book/js-regex-mini-book.github.io)

[JavaScript 正则表达式迷你书（1.1 版）.pdf](https://github.com/qdlaoyao/js-regex-mini-book/raw/master/JavaScript%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%BF%B7%E4%BD%A0%E4%B9%A6%EF%BC%881.1%E7%89%88%EF%BC%89.pdf)

## Suggestions & Questions

- Author: qdlaoyao
  - [知乎](https://www.zhihu.com/people/qdlaoyao)
  - [掘金](https://juejin.im/user/58247e285bbb5000590e4824)
  - [Email](mailto://qdlaoyao@126.com)
  - [Github](https://github.com/qdlaoyao)
- Translator: xiaoyu2er
  - [知乎](https://www.zhihu.com/people/xiaoyu2er)
  - [掘金](https://juejin.cn/user/624178332449287)
  - [Email](mailto://zongyanqi@foxmail.com)
  - [Github](https://github.com/xiaoyu2er)

[js-regex-mini-book](https://github.com/js-regex-mini-book/js-regex-mini-book.github.io)

## Thanks

由于本书是由个人文章修改而成，感谢各平台读者的支持。

感谢湖山，是他说我该把这些东西写出来的。

感谢小不，他在多方面给予了我帮助，封面是他设计的。

感谢小鱼二，他对全书进行了仔细地校对，并提出了相应的修改意见。

感谢丹迪的支持，他为我设计了多个封面，风格比较前卫，留给后续版本。

最后，尤其要感谢各位大佬帮我写的推荐序。他们的名字不分先后如下：大漠穷秋、小鱼二、Jack Lo、程序猿 DD、江湖人称向前兄、文蔺、\_周末、Dark_Night。

## Preface

> 正则表达式一直是我的一个痛点，很多人肯定也跟我一样存在类似的情况。但是正则表达式的使用范围非常广泛，尤其在表单校验这个场景下更是不可或缺。这本小书用一个一个的小例子深入浅出地示范了正则表达式的典型用法，值得一读。
>
> —— 大漠穷秋 [@damoqiongqiu](https://github.com/damoqiongqiu)

> 我连续看了老姚在专栏的正则系列的前三篇，毫不犹豫就打赏了，而且顺藤摸瓜认识了老姚，没想到老姚对学习本身研究颇深，当晚第一次聊天就是半宿。在本系列中，我印象最深的两句话是"正则表达式是匹配模式，要么匹配字符，要么匹配位置"和"对于位置的理解，我们可以理解成空字符"，这两句话可谓是醍醐灌顶，通过数字的千位分隔符这个例子把之前一直搞不清楚的先行断言彻底搞懂了。真是佩服老姚的理解和讲解能力。相信我，通读迷你小书，可以让你真正理解正则并在工作中不怕读，不怕写正则。让正则成为你开发中的一把利器。
>
> —— 小鱼二 [@xiaoyu2er](https://github.com/xiaoyu2er)

> 这是一本由浅入深且环环相扣的正则书籍，花了两天的碎片时间（8h）看完了，得益于老姚程序员的逻辑性以及娴熟的文字表达能力，原本枯燥晦涩的正则知识，变得清晰且有迹可循！
>
> —— Jack Lo

> 老姚编写的 JavaScript 正则表达式系列文章通俗易通，虽然示例以 JavaScript 编写，但是对于正则表达式的学习通用于其他语言。所以，不论您是前端还是后端工程师，通过阅读此迷你书都能获益。最后，感谢老姚能够写出这一系列文章，让大家能够更轻松的理解和使用正则表达式。
>
> —— 程序猿 DD

> 正则表达式是通用的技能，基础的东西永远绕不开。能在实战中进行总结，并形成专题，更是一种值得学习的方式。也就几个小时的时间，看完这本图文并茂、贴近实战的教程之后，你会发现自己的代码其实还可以再精简下。
>
> —— 江湖人称向前兄

> 本书规则、案例、原理兼备，讲解透彻，是一本不可多得的正则表达式入门、进阶资料。无论你是初入门的小白，还是有经验的程序员，都能从这本书学到很多东西。这可能是我读过的最好懂的一本正则教程。感谢作者老姚的工作。
>
> —— 文蔺

> 良师易得，益友难求。工作中得到了老姚的很多帮助，很是感谢。最近拜读了老姚的正则表达式一书，受益匪浅，从每次遇到正则问题，从百度到自己书写，都离不开书中的知识。并且此书通俗易懂，条理清晰，每次阅读都会得到新的收获。感谢老姚，支持你，加油！
>
> —— \_周末

> 对于正则的知识，之前看得总是零零碎碎的，没有好好地去系统学习过，所以在方面知识体系相对薄弱。通过这本正则迷你书，总算有一个清晰掌握。一直以来比较关注作者的笔记和文章，自身在 JS 的成长上也受益于姚哥帮助，感谢他对这本书的付出，希望这本迷你书能帮助更多想学习正则的同学。
>
> —— Dark_Night

## Guide

亲爱的读者朋友，如果你打开了这本书，说明你跟我一样，对正则很感兴趣。

想必你也了解正则的重要性。在我看来，正则表达式是衡量程序员水平的一个侧面标准。

本书的目的，是希望所有认真读完的朋友们，能真正地学会并应用正则表达式。

本书内容共有七章，完整地讨论了 JavaScript 语言的正则表达式方方面面。

具体章节如下：

- [第一章 正则表达式字符匹配攻略](./ch1.md)

- [第二章 正则表达式位置匹配攻略](./ch2.md)

- [第三章 正则表达式括号的作用](./ch3.md)

- [第四章 正则表达式回溯法原理](./ch4.md)

- [第五章 正则表达式的拆分](./ch5.md)

- [第六章 正则表达式的构建](./ch6.md)

- [第七章 正则表达式编程](./ch7.md)

下面简单地说说每一章都讨论了什么？

::: tip
正则是匹配模式，要么匹配字符，要么匹配位置。
:::

[第一章](./ch1.md)和[第二章](./ch2.md)以这个角度去讲解了正则表达式的基础。

::: tip
在正则可以使用括号捕获数据，要么在 API 中进行分组引用，要么在正则里进行反向引用。
:::

这是[第三章](./ch3.md)的主题，讲解了正则表达式中括号的作用。

::: tip
学习正则，是需要了解其匹配原理的。
:::

[第四章](./ch4.md)，讲解了正则表达式的回溯法原理。

另外在[第六章](./ch6.md)最后一节，也讲解了正则的表达式的整体工作原理。

::: tip
不仅能看懂别人的正则，还要自己会写正则。
:::

[第五章](./ch5.md)，是从读的角度，去拆分一个正则表达式，而第六章是从写的角度，去构建一个正则表达式。

::: tip
学习正则，是为了在真实世界里应用的。
:::

[第七章](./ch7.md)讲解了正则的用法，和相关 API 需要注意的地方。

虽然你可以直接阅读你想了解的任何一章，但我还是建议从头到尾地完整阅读。本书是迷你书，不厚的。

最好阅读两遍。第一遍，不求甚解地快速阅读一遍。阅读过程中遇到的问题不妨记录下来，也许阅读完毕后就能解决很多。

然后有时间的话，再带着问题去精读第二遍。

深呼吸，开始我们的正则表达式旅程吧。

我在终点等你。