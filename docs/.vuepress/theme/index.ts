import { defaultTheme } from "@vuepress/theme-default";
import { path } from "@vuepress/utils";

import type { Theme } from "@vuepress/core";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { commentPlugin } from "vuepress-plugin-comment2";

export const commentTheme = (options: DefaultThemeOptions): Theme => ({
  name: "comment-theme",

  // we are extending @vuepress/theme-default
  extends: defaultTheme(options),

  layouts: {
    // we overide the default layout to provide comment service
    Layout: path.resolve(__dirname, "layouts", "Layout.vue"),
  },
  plugins: [
    commentPlugin({
      comment: true,
      type: "giscus",
      repo: "js-regex-mini-book/js-regex-mini-book.github.io",
      repoId: "R_kgDOHXXrGw",
      category: "Announcements",
      categoryId: "DIC_kwDOHXXrG84CPMku",
      mapping: "pathname",
      reactionsEnabled: true,
      inputPosition: "top",
    }),
  ],
});
