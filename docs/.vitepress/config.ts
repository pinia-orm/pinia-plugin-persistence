import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import {
  description,
  discord,
  font,
  github,
  name,
  releases,
  editLink,
  twitter,
} from './meta'

export default defineConfig({
  lang: 'en-US',
  title: name,
  description,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:title', content: name }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { name: 'twitter:title', content: name }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: editLink,
      text: 'Suggest changes to this page',
    },
    socialLinks: [
      { icon: 'twitter', link: twitter },
      { icon: 'discord', link: discord },
      { icon: 'github', link: github },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-PRESENT Elone Hoo',
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Config', link: '/config/' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes',
            link: releases,
          },
        ],
      },
    ],
    sidebar: {
      '/':[
        {
          text: 'Guide',
          items: [
            {
              text: 'Why this plugin',
              link: '/guide/why',
            },
            {
              text: 'Getting Started',
              link: '/guide/',
            },
            {
              text: 'Limitations',
              link: '/guide/limitations',
            },
            {
              text: 'Advanced Usage',
              link: '/guide/advanced',
            },
          ],
        },
        {
          text:'Config',
          items:[
            {
              text:'Config Reference',
              link:'/config/'
            }
          ]
        }
      ]
    }
  },
})
