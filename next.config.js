const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true
})

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withNextra({
  ...(isProduction && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    basePath: '/designeraiguide',
    assetPrefix: '/designeraiguide/',
  }),
  webpack(config) {
    const allowedSvgRegex = /components\/icons\/.+\.svg$/

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg')
    )
    fileLoaderRule.exclude = allowedSvgRegex

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack']
    })
    return config
  }
})
