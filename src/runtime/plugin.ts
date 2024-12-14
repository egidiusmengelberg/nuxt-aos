import AOS from 'aos'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const config = useRuntimeConfig()
    AOS.init(config.public.aos || {})
  })

  const refreshAos = () => AOS.refresh()
  const refreshHardAos = () => AOS.refreshHard()

  return {
    provide: {
      refreshAos,
      refreshHardAos,
    },
  }
})
