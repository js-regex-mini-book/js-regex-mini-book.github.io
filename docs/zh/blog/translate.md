# 翻译计划

## 如何参与

你需要通过 fork Github 仓库 [js-regex-mini-book/js-regex-mini-book.github.io](https://github.com/js-regex-mini-book/js-regex-mini-book.github.io)，通过 PR 来参与到翻译计划。

## 整理

目前整理工作主要由小鱼二在进行，预计在 2022/06 月完成所有中文内容。当然你同样可以在 `docs/zh/xx.md` 中进行内容修改。

## 翻译

由于原版内容为中文，所以目前首要的翻译任务是 中译英。你可以参考 `docs/zh/xx.md` 下的原文，在 `docs/xx.md` 进行翻译&修改。

## 增加语言

- 你需要增加 `docs/lang/` 目录，并同步所有文章
- 你需要在 `docs/.vuepress/configs/[navbar|sidebar]/` 下增加索引
- 你需要在 `docs/.vuepress/config.ts` 中修改 `locales` 配置
