import { defineConfig } from "astro/config";
import compress from "astro-compress";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://riccardozaffalon.com/",
  base: "/riccardozaffalon.github.io",
  integrations: [
    compress({
      css: false,
    }),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
  },
});
