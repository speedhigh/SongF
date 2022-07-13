import { defineConfig } from '@windicss/plugin-utils'

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  theme: {
    extend: {
      colors: {
        primary: '#FF432A'
      },
      backgroundImage: {
        'login-bg': "url('../SongF/assets/images/login/login-bg.webp')",
      }
    },
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
  ]
})
