import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { defu } from "defu";
import { name, version } from "../package.json";
import { AosOptions } from "aos";

export interface ModuleOptions extends AosOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "aos",
  },
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.public = defu(
      nuxt.options.runtimeConfig.public || {},
      {
        aos: options,
      }
    );

    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
