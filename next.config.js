/** @type {import('next').NextConfig} */
const path = require('path')
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "globals.scss";`
  },
  i18n,
}

module.exports = nextConfig
