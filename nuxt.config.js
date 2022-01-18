export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Prabin Gurung',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Laravel | Vue Developer from Pokhara, Nepal' },
      { rel: 'icon', type: 'image/x-icon', href: '~/assets/img/soltee.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/assets/img/soltee.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/tailwind.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-smooth-scroll',
    '~/plugins/vue-simplebar',
    '~/plugins/progress-bar',
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' },
    // '~/plugins/vue-scroll-indicator',
    { src: '~/plugins/vue-pdf-js.js', mode: 'client' },

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],


    // "/api/": {
    //   target:
    //     "https://jsonplaceholder.typicode.com/",
    //   pathRewrite: { "^/api/": "" },
    //   changeOrigin: true,
    // }

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/proxy',

    ['nuxt-lazy-load', {
      // Your options
    }]

  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy : true
  },
  proxy: {

  

  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {      
      plugins: {        
        tailwindcss: {},        
        autoprefixer: {},      
      },    
    },
  },

 
}
