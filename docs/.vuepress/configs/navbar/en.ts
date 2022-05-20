import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarEn: NavbarConfig = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "e-Book",
    children: [
      "/forward.md",
      "/ch2.md",
      "/ch3.md",
      "/ch4.md",
      "/ch5.md",
      "/ch6.md",
      "/ch7.md",
      "/cheet-sheet.md",
      "/glossary.md",
      "/reference.md",
      "/afterward.md",
    ],
  },

  {
    text: "Tools",
    children: [
      {
        text: "Regulex",
        link: "https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24",
      },
    ],
  },
  {
    text: "Blog",
    link: "/blog/about.md",
  },
];
