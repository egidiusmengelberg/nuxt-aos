import AOS, { type AosOptions } from 'aos'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:suspense:resolve', () => {
    const config = useRuntimeConfig()
    const aosConfig: AosOptions = {
      ...config.public.aos,
      duration: config.public.aos?.duration || 600,
      delay: config.public.aos?.delay || 0,
      offset: config.public.aos?.offset || 120,
      easing: config.public.aos?.easing || "ease",
      once: config.public.aos?.once || false, 
      mirror: config.public.aos?.mirror || false
    }

    AOS.init(aosConfig)
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
