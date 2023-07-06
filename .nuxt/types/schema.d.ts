import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["unocss"]?: typeof import("/home/projects/nuxt-examples-suakka/node_modules/@unocss/nuxt/dist/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueuse"]?: typeof import("/home/projects/nuxt-examples-suakka/node_modules/@vueuse/nuxt/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["colorMode"]?: typeof import("/home/projects/nuxt-examples-suakka/node_modules/@nuxtjs/color-mode/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["/home/projects/nuxt-examples-suakka/node_modules/@unocss/nuxt/dist/index", Exclude<NuxtConfig["unocss"], boolean>] | ["/home/projects/nuxt-examples-suakka/node_modules/@vueuse/nuxt/index", Exclude<NuxtConfig["vueuse"], boolean>] | ["/home/projects/nuxt-examples-suakka/node_modules/@nuxtjs/color-mode/dist/module", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["nui"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   theme: {
      primaryColor: string,

      secondaryColor: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }