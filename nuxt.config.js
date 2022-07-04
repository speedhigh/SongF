export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SongF',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '光大健康在线是国内优秀的健康平台，提供健康在线咨询，日本健康咨询，赴日精密体检，海外药品商城等多个项目，为您的健康保驾护航' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/element-ui', ssr: true },
    { src: '@/plugins/crypto', ssr: true },
    { src: '@/plugins/axios', ssr: true },
    { src: '@/plugins/storeCache', ssr: false },
  ],

  env: {
    baseUrl:process.env.NUXT_ENV_BASE_URL,
  },

  axios: {
    baseUrl:process.env.NUXT_ENV_BASE_URL,
  },

  loading: {
    color: '#FF432A',
    height: '2px'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['element-ui'],
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ],
      comments: true
    },
  }
}
