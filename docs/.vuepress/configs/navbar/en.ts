import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarEn: NavbarConfig = [
  {
    text: "Home",
    link: "/en/",
  },
  {
    text: "e-Book",
    children: [
      "/en/forward.md",
      "/en/ch2.md",
      "/en/ch3.md",
      "/en/ch4.md",
      "/en/ch5.md",
      "/en/ch6.md",
      "/en/ch7.md",
      "/en/cheet-sheet.md",
      "/en/glossary.md",
      "/en/reference.md",
      "/en/afterward.md",
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
    link: "/en/blog/about.md",
  },
];
