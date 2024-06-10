import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { addCustomTab } from '@nuxt/devtools-kit';
import { name, version } from "../package.json";
import type { AosOptions } from "aos";

export interface ModuleOptions extends Partial<AosOptions> {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "aos",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.public.aos = options || {};

    nuxt.options.build.transpile ||= [];
    nuxt.options.build.transpile.push("aos");

    nuxt.options.alias["#aos"] = resolver.resolve("./runtime");

    nuxt.hook("vite:extendConfig", (config) => {
      config.optimizeDeps ||= {};
      config.optimizeDeps.include ||= [];
      config.optimizeDeps.include.push("aos");
    });

    addPlugin({
      src: resolver.resolve("./runtime/plugin"),
      mode: "client",
    });

    addCustomTab(() => ({
      name,
      title: "AOS Docs",
      icon: "https://media.licdn.com/dms/image/D4D12AQEYCFvOjhb8rQ/article-cover_image-shrink_600_2000/0/1679941246531?e=2147483647&v=beta&t=A3azwRlUOpX_tBCILj49HMVojFrvGUZO8vC_yBi_dkQ",
      view: {
        type: "iframe",
        src: "https://michalsnik.github.io/aos/",
      },
    }))
  },
});
