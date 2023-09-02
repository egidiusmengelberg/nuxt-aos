import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { name, version } from "../package.json";
import { AosOptions } from "aos";

export interface ModuleOptions {
  options?: AosOptions;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "aos",
  },
  defaults: {
    options: {},
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Get runtimeConfig & add aos to it so we can access it in plugin
    const config = useRuntimeConfig();
    config.public.aos = options.options;

    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
