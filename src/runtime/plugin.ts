import { defineNuxtPlugin, useRuntimeConfig } from "#app";

import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  AOS.init(config.public.aos || {});

  // refresh function
  const refreshAos = () => AOS.refresh();
  // refreshHard function
  const refreshHardAos = () => AOS.refreshHard();

  return {
    provide: {
      refreshAos,
      refreshHardAos,
    },
  };
});
