// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css', 'aos/dist/aos.css', '@/assets/styles.scss'],
  app: {
    head: {
      script: [{ src: 'https://unpkg.com/aos@next/dist/aos.js', defer: true }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        }
      ]
    }
  }
})

