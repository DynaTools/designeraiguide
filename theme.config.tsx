import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 206 246" fill="none">
        <rect x="20" y="20" width="40" height="40" rx="8" fill="currentColor"/>
        <rect x="80" y="20" width="40" height="40" rx="8" fill="currentColor"/>
        <rect x="140" y="20" width="40" height="40" rx="8" fill="currentColor"/>
        <rect x="20" y="80" width="100" height="40" rx="8" fill="currentColor"/>
        <rect x="140" y="80" width="40" height="40" rx="8" fill="currentColor"/>
        <rect x="20" y="140" width="40" height="40" rx="8" fill="currentColor"/>
        <rect x="80" y="140" width="100" height="40" rx="8" fill="currentColor"/>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Designer AI Guide
      </span>
    </>
  ),
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'pt', text: 'Português' },
    { locale: 'it', text: 'Italiano' },
  ],
  head: function UseHead() {
    const { title } = useConfig()
    return (
    <>
      <title>{title ? title + ' | Designer AI Guide': 'Designer AI Guide'} </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Designer AI Guide" />
      <meta property="og:description" content="A Comprehensive Guide for AI-Powered Design" />
      <meta
          name="og:title"
          content={title ? title + ' | Designer AI Guide' : 'Designer AI Guide'}
        />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </>
  )},
  project: {
    link: 'https://github.com/your-username/designer-ai-guide',
  },
  chat: {
    link: 'https://discord.gg/your-discord',
  },
  docsRepositoryBase: 'https://github.com/your-username/designer-ai-guide/tree/main/',
  footer: {
    text: 'Licensed under CC BY-NC 4.0. Non-commercial use only.',
  },
  search: {
    placeholder: 'Search...',
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  }
}

export default config
