import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WiHi Docs",
  head: [["link", {rel: "icon", type: "image/png", href:"/favicon.png"}]],
  cleanUrls: true,
  description: "Documentation for WiHi",
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },s
      { text: 'wihi.cc', link: 'https://wihi.cc' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: true,
        items: [
          { text: 'What is WiHi?', link: '/' },
          { text: 'Why WiHi?', link: '/intro/why' },
          { text: 'Technology', link: '/intro/tech' },
          { text: 'Tokenomics', link: '/intro/tokenomics' },
          { text: 'Getting Started', link: '/intro/get-started' }
        ]
      },
      {
        text: 'API',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/api'},
          { text: '/stations', link: '/api/stations'},
          { text: '/users', link: '/api/users'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wihi-labs/' },
      { icon: 'twitter', link: 'https://x.com/wihiweather' },
      { icon: 'discord', link: 'https://discord.gg/wihi' }
    ],

    search: {
      provider: "local",
    }
  }
})
