import "vue";
import "hookable";
import { h as defineNuxtRouteMiddleware } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue/server-renderer";
import "defu";
const foo = /* @__PURE__ */ defineNuxtRouteMiddleware(() => {
  console.log("Hello from extended middleware !");
});
export {
  foo as default
};
//# sourceMappingURL=foo-a98f00a1.js.map
