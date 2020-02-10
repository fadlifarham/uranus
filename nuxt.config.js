
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Uranus - Platform Gotong Royong Untuk Sukses Bersama',
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/library-bundle.css' },
      { rel: 'stylesheet', href: '/css/main.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      // { rel: 'stylesheet', href: '<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js', defer: true },
      // For Body
      { src: '/js/library-bundle.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.4/imagesloaded.pkgd.min.js', body: true },
      { src: 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js', body: true },
      { src: '/js/functions.js', body: true },
      { src: '/js/main.js', body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // '@/assets/css/library-bundle.css',
    // '@/assets/css/main.css',
    // '@/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/app.js',
    // '~/plugins/functions.js',
    // '~/plugins/library-bundle.js',
    // '~/plugins/main.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['vue-currency-filter/nuxt', {
      symbol: 'Rp',
      thousandsSeparator: '.',
      fractionCount: 2,
      fractionSeparator: ',',
      symbolPosition: 'front',
      symbolSpacing: true
    }],
    '@nuxtjs/moment'
  ],

  moment: {
    locales: ['id']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "https://api.dibumi.com/api/",
    credentials: false
  },

  // Auth
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: 'login',
      home: '/dashboard'
    },

    strategies: {
      local: {
        endpoints: {
          login: { url: '/lib/rest-auth/login/', method: 'post', propertyName: 'key' },
          logout: { url: '/lib/rest-auth/logout/', method: 'post' },
          user: { url: '/lib/rest-auth/user', method: 'get', propertyName: false }
        },
        tokenType: "Token"
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
