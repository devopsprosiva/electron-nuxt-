/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

const path = require('path')

module.exports = {
  mode: 'spa', // or 'universal'
  head: {
    title: 'electron-nuxt-echarts'
  },
  // loading: false,
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],
  plugins: [
    { src: '~/plugins/echarts', mode: 'client' }
  ],
  buildModules: [

  ],
  modules: [
    'nuxt-purgecss'
  ],
  purgeCSS: {
  },
  /*
  ** Build configuration
  */
  build: {
  /*
  ** You can extend webpack config here
  */
    extractCSS: true,
    transpile: ['vue-echarts', 'resize-detector'],
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      },
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          'focus-within-pseudo-class': false
        }
      }
    },
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
