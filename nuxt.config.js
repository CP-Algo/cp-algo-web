export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cp-algo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/styles/global.scss',
    '~/assets/scss/styles/normalize.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://localhost:3000/api',
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      home: '/',
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          user: { url: 'user', method: 'get' },
          logout: false,
        },
        token: {
          property: 'token',
          maxAge: 2592000,
        },
        user: {
          property: false,
        },
      },
    },
  },

  toast: {
    position: 'bottom-right',
    theme: 'bubble',
    duration: 10000,
  },

  serverMiddleware: {
    '/api': '~/api',
  },

  styleResources: {
    // your settings here
    scss: ['~assets/scss/vars/*.scss'],
    hoistUseStatements: true, // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  googleFonts: {
    families: {
      Nunito: [400, 600, 700],
      Poppins: [700],
    },
    display: 'swap',
  },

  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    DOMAIN: process.env.DOMAIN,
    PORT: process.env.PORT,
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    DATABASE_URL: process.env.DATABASE_URL,
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'defu'
    ]
  },

  // To allow external connections
  server: {
    host: "0.0.0.0"
  }
}
