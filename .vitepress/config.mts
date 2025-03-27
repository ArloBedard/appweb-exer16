import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue du TP1",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Accueil", link: "/" },
      { text: "Revues de code", link: "/arlo-bedard" },
    ],

    sidebar: [
      {
        text: "Revues de code",
        items: [
          { text: "Arlo Bédard", link: "/arlo-bedard" },
          {
            text: "Laurent Ferland-Girouard",
            link: "/laurent-ferland-girouard",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
