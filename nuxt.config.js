export default {
  buildDir: '_nuxt',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'eggbank.loc',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ]
  },
  transition: {
    name: 'routing',
    mode: 'out-in'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/assets/plugins/plugins.js', mode: 'client'
    },
    {
      src: '~/assets/plugins/vuelidate.js', ssr: 'false'
    },
    {
      src: '~/assets/plugins/simplebar.js', mode: 'client'
    },
    {
      src: '~/assets/plugins/multiselect.js', mode: 'client'
    },
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxt/postcss8',
    'nuxt-uikit',
    "@nuxtjs/svg",
    '@nuxt/image'
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/variables.scss',
    '~/assets/styles/main.scss'
  ],
  image: {
    // Options
  },
  recaptcha: {
    /* reCAPTCHA options */
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    language: 'en',   // Recaptcha language (v2)
    mode: 'base',       // Mode: 'base', 'enterprise'
    //siteKey: String,    // Site key for requests
    version: 2,    // Version
    size: 'normal'        // Size: 'compact', 'normal', 'invisible' (v2)
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image',
    '@nuxtjs/recaptcha',
  ],
  styleResources: {
    scss: ['~/assets/styles/variables.scss', '~/assets/styles/mixins.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
    fileLoader: {
      // file-loader options
    }
  },
  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      siteKey:'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' // for example
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      '@vueform/slider/dist/slider.vue2.js',
      'hooper',
      'vuelidate',
      'vuelidate/lib/validators',
      'simplebar-vue',
      'vue-multiselect'
    ],
    vendor:[
      'vuelidate'
    ],
    publicPath: '/_nuxt/dist/',
    postcss: {
      plugins: {},
      preset: {}
    }
  }
}
