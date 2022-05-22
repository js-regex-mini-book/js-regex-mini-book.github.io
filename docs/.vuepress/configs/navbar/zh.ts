import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarZh: NavbarConfig = [
  {
    text: "首页",
    link: "/zh/",
  },
  {
    text: "电子书",
    children: [
      "/zh/forward.md",
      "/zh/ch1.md",
      "/zh/ch2.md",
      "/zh/ch3.md",
      "/zh/ch4.md",
      "/zh/ch5.md",
      "/zh/ch6.md",
      "/zh/ch7.md",
      "/zh/cheet-sheet.md",
      "/zh/glossary.md",
      "/zh/reference.md",
      "/zh/afterward.md",
    ],
  },
  {
    text: "工具",
    children: [
      {
        text: "Regulex",
        link: "https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24",
      },
      {
        text: "Diagrams",
        link: "https://www.diagrams.net/",
      },
      {
        text: "CodesSndbox",
        link: "https://codesandbox.io",
      },
    ],
  },
  {
    text: "博客",
    link: "/zh/blog/about.md",
  },
];
