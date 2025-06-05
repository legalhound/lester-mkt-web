import AOS from 'aos'
import 'aos/dist/aos.css'


export default defineNuxtPlugin(async () => {
  if (process.client) {
    const AOS = await import('aos')
    await import('aos/dist/aos.css')
    AOS.init({
      debug: true,
      once: false,
      duration: 3000,
    })
  }
})
    window.addEventListener('hashchange', () => {
      setTimeout(() => {
        AOS.refresh()
      }, 500)
    })
