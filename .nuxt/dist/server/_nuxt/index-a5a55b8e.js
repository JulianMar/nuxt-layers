import { _ as __nuxt_component_0$2 } from "./nuxt-link-149f0ed2.js";
import { defineComponent, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, openBlock, createBlock, createCommentVNode, ref, createElementBlock, isRef, computed, createTextVNode, toDisplayString } from "vue";
import { ssrRenderVNode, ssrRenderSlot, ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { d as defineAppConfig, a as useNuxtApp, _ as _export_sfc, b as componentName, e as useState, f as useRuntimeConfig } from "../server.mjs";
import "hookable";
import "destr";
import "devalue";
import { klona } from "klona";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const cfg0 = defineAppConfig({
  foo: "user",
  bar: "user",
  baz: "base",
  array: [
    "user",
    "user",
    "user"
  ]
});
const cfg1 = defineAppConfig({
  bar: "base",
  baz: "base",
  array: () => [
    "base",
    "base",
    "base"
  ],
  arrayNested: {
    nested: {
      array: [
        "base",
        "base",
        "base"
      ]
    }
  }
});
const inlineConfig = {};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, cfg1, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "NLink",
  __ssrInlineRender: true,
  props: {
    to: {},
    href: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.href || _ctx.target ? "a" : unref(__nuxt_component_0$2)), mergeProps(_ctx.$props, { class: "n-link n-link-base hover:n-link-hover n-transition" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NLink.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "NIcon",
  __ssrInlineRender: true,
  props: {
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["n-icon", _ctx.icon]
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NIcon.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NButton",
  __ssrInlineRender: true,
  props: {
    to: {},
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NIcon = _sfc_main$b;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.to ? unref(__nuxt_component_0$2) : "button"), mergeProps({ to: _ctx.to }, _ctx.$attrs, { class: "n-button n-transition n-button-base hover:n-button-hover active:n-button-active focus-visible:n-focus-base n-disabled:n-disabled" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
              if (_ctx.icon) {
                _push2(ssrRenderComponent(_component_NIcon, {
                  icon: _ctx.icon,
                  class: "n-button-icon"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "icon", {}, () => [
                _ctx.icon ? (openBlock(), createBlock(_component_NIcon, {
                  key: 0,
                  icon: _ctx.icon,
                  class: "n-button-icon"
                }, null, 8, ["icon"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NButton.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$9 = {
  name: componentName,
  props: {
    placeholder: String,
    tag: {
      type: String,
      default: "span"
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_ClientOnly, mergeProps({
    placeholder: $props.placeholder,
    "placeholder-tag": $props.tag
  }, _attrs), {}, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const useColorMode = () => {
  return useState("color-mode").value;
};
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = resolveUnref(truthyValue);
      _value.value = _value.value === truthy ? resolveUnref(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NDarkToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const mode = useColorMode();
    const isDark = computed({
      get() {
        return mode.value === "dark";
      },
      set() {
        mode.preference = isDark.value ? "light" : "dark";
      }
    });
    const toggle = useToggle(isDark);
    const context = {
      mode,
      isDark,
      toggle
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ColorScheme = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ColorScheme, mergeProps({ tag: "span" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", context, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", context)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/nuxt/NDarkToggle.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "n-card n-card-base" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 221 65",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#a)"><path fill="currentColor" d="M82.562 18.57h7.302l15.474 24.742V18.571h6.741v35.057h-7.252l-15.525-24.69v24.69h-6.74V18.57Zm59.645 35.058h-6.282v-3.916c-1.429 2.756-4.339 4.308-8.015 4.308-5.822 0-9.603-4.107-9.603-10.018V28.385h6.282V42.71c0 3.456 2.146 5.859 5.362 5.859 3.524 0 5.974-2.704 5.974-6.41V28.385h6.282v25.243Zm21.857-.4-6.026-8.413-6.027 8.414h-6.69l9.296-13.172-8.58-12.071h6.843l5.158 7.264 5.106-7.264h6.895l-8.632 12.07 9.295 13.173h-6.638Zm19.405-32.455v7.611h7.149v5.16h-7.149v12.53c0 .421.17.825.473 1.123.303.298.715.465 1.144.466h5.532v5.955h-4.137c-5.617 0-9.293-3.206-9.293-8.811V33.548h-5.056v-5.164h3.172c1.479 0 2.34-.864 2.34-2.293v-5.318h5.825Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.119 11.546c-1.886-3.242-6.6-3.242-8.484 0L1.087 46.875c-1.885 3.241.472 7.293 4.242 7.293h16.04c-1.61-1.408-2.207-3.844-.988-5.934L35.942 21.56l-5.824-10.013Z" fill="#80EEC0"></path><path d="M43.137 19.295c1.56-2.652 5.461-2.652 7.022 0l17.004 28.906c1.56 2.652-.39 5.968-3.51 5.968h-34.01c-3.12 0-5.07-3.316-3.51-5.968l17.004-28.906ZM209.174 53.8h-10.691c0-1.85.067-3.452 0-6.02h10.641c1.868 0 3.353.1 4.354-.935 1-1.034 1.501-2.335 1.501-3.903 0-1.834-.667-3.219-2.002-4.153-1.301-.967-2.985-1.451-5.054-1.451h-2.601v-5.254h2.652c1.701 0 3.119-.4 4.253-1.2 1.134-.801 1.701-1.986 1.701-3.553 0-1.301-.434-2.336-1.301-3.103-.834-.8-2.001-1.2-3.503-1.2-1.634 0-2.918.483-3.853 1.45-.9.968-1.401 2.152-1.501 3.553h-6.254c.133-3.236 1.251-5.788 3.352-7.656 2.135-1.868 4.887-2.802 8.256-2.802 2.402 0 4.42.434 6.055 1.301 1.668.834 2.919 1.952 3.753 3.353.867 1.4 1.301 2.952 1.301 4.653 0 1.968-.551 3.636-1.651 5.004-1.068 1.334-2.402 2.235-4.004 2.702 1.969.4 3.57 1.368 4.804 2.902 1.234 1.501 1.852 3.403 1.852 5.705 0 1.934-.468 3.702-1.402 5.304-.934 1.6-2.301 2.885-4.103 3.852-1.768.968-3.953 1.452-6.555 1.452Z" fill="#00DC82"></path></g></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NuxtLogo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const NuxtLogo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 236 65",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M29.3445 12.5176c-1.8181-3.10288-6.3636-3.10288-8.1819 0L1.34708 46.334c-1.8182 3.1029.45453 6.9814 4.09096 6.9814H20.9071c-1.5538-1.3478-2.1292-3.6793-.9532-5.68l15.0073-25.5327-5.6167-9.5851Z" fill="#80EEC0"></path><path d="M41.9001 19.9353c1.5048-2.5387 5.2665-2.5387 6.7712 0l16.3991 27.6679c1.5048 2.5387-.3762 5.7122-3.3855 5.7122H28.8867c-3.0093 0-4.8904-3.1735-3.3857-5.7122l16.3991-27.6679Z" fill="#00DC82"></path><path d="M93.247 53.206c7.271 0 12.682-4.1739 13.273-10.2874h-5.579c-.508 3.2042-3.6358 5.4388-7.694 5.4388-5.1572 0-9.0462-3.5415-9.0462-10.2451 0-6.7037 3.889-10.2875 9.0462-10.2875 3.9735 0 7.102 2.2345 7.524 5.4811h5.834c-.803-6.1135-6.214-10.2875-13.358-10.2875-7.7358 0-14.6684 5.0593-14.6684 15.0939 0 10.0344 6.8059 15.0937 14.6684 15.0937Zm26.866 0c6.468 0 11.118-4.6378 11.118-10.962 0-6.3242-4.65-10.962-11.118-10.962-6.51 0-11.159 4.6378-11.159 10.962 0 6.3242 4.649 10.962 11.159 10.962Zm0-4.4692c-3.55 0-5.918-2.6562-5.918-6.4928 0-3.8368 2.368-6.4927 5.918-6.4927 3.509 0 5.877 2.6559 5.877 6.4927 0 3.8366-2.368 6.4928-5.877 6.4928Zm19.826 4.1319V41.2743c0-3.12 2.029-5.3967 4.946-5.3967 2.663 0 4.439 2.0239 4.439 4.933v12.0581h5.199V39.7143c0-4.975-3.128-8.4323-7.947-8.4323-3.044 0-5.453 1.3071-6.637 3.6259v-3.2886h-5.199v21.2494h5.199Zm21.158-21.2494h-4.185v4.3427h4.185v9.4864c0 4.722 3.044 7.4203 7.694 7.4203h3.424v-4.3849h-2.833c-1.943 0-3.085-1.0961-3.085-3.2464V35.962h5.918v-4.3427h-5.918v-6.4085h-5.2v6.4085Zm28.684 14.1662c-.55 2.0237-2.283 3.12-4.946 3.12-3.297 0-5.495-2.1924-5.876-5.6074h15.725c.043-.4217.085-1.0541.085-1.7709 0-5.0593-3.211-10.2452-10.357-10.2452-6.974 0-10.441 5.2703-10.441 10.8776 0 5.5654 3.89 11.0464 10.864 11.0464 5.243 0 9.215-2.9092 10.018-7.4205h-5.072Zm-5.369-10.6245c3.086 0 4.947 2.0237 5.158 4.722h-10.483c.549-3.2044 2.408-4.722 5.325-4.722Zm19.141 17.7077V41.2743c0-3.12 2.029-5.3967 4.947-5.3967 2.663 0 4.439 2.0239 4.439 4.933v12.0581h5.199V39.7143c0-4.975-3.128-8.4323-7.947-8.4323-3.044 0-5.453 1.3071-6.638 3.6259v-3.2886h-5.199v21.2494h5.199Zm21.159-21.2494h-4.185v4.3427h4.185v9.4864c0 4.722 3.043 7.4203 7.693 7.4203h3.425v-4.3849h-2.833c-1.945 0-3.086-1.0961-3.086-3.2464V35.962h5.919v-4.3427h-5.919v-6.4085h-5.199v6.4085Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NuxtContentLogo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const NuxtContentLogo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NuxtExampleLayout",
  __ssrInlineRender: true,
  props: {
    example: {},
    showTips: { type: Boolean },
    class: {},
    openPath: {},
    repo: { default: "nuxt/framework" }
  },
  setup(__props) {
    const props = __props;
    const openInEditor = () => {
      fetch(`/__open-in-editor?file=${encodeURIComponent(props.openPath || "app.vue")}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NLink = _sfc_main$c;
      const _component_NButton = _sfc_main$a;
      const _component_NDarkToggle = _sfc_main$8;
      const _component_NCard = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative font-sans",
        n: "green6"
      }, _attrs))}><div class="container max-w-200 mx-auto py-10 px-4"><div class="flex flex-wrap items-end gap-3 mb-4 relative">`);
      ssrRenderSlot(_ctx.$slots, "logo", {}, () => {
        if (_ctx.repo === "nuxt/content") {
          _push(ssrRenderComponent(NuxtContentLogo, { class: "h-10" }, null, _parent));
        } else {
          _push(ssrRenderComponent(NuxtLogo, { class: "h-10" }, null, _parent));
        }
      }, _push, _parent);
      _push(`<div class="text-xl flex"><div class="op-50"> examples/ </div>`);
      ssrRenderSlot(_ctx.$slots, "name", {}, () => {
        _push(ssrRenderComponent(_component_NLink, {
          href: `https://github.com/${_ctx.repo}/tree/main/examples/${_ctx.example}`,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.example)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.example), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      _push(`</div><div flex-auto></div><div class="op20 hover:op-100 n-transition -mb-2 -mr-1">`);
      _push(ssrRenderComponent(_component_NButton, {
        n: "borderless lg",
        class: "p-2 op50",
        to: `https://github.com/${_ctx.repo}/tree/main/examples/${_ctx.example}`,
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$b, { icon: "carbon-code" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$b, { icon: "carbon-code" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NDarkToggle, null, {
        default: withCtx(({ toggle }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NButton, {
              n: "borderless lg",
              "p-2": "",
              op50: "",
              onClick: toggle
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$b, { icon: "dark:carbon-moon carbon-sun" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$b, { icon: "dark:carbon-moon carbon-sun" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NButton, {
                n: "borderless lg",
                "p-2": "",
                op50: "",
                onClick: toggle
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$b, { icon: "dark:carbon-moon carbon-sun" })
                ]),
                _: 2
              }, 1032, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      ssrRenderSlot(_ctx.$slots, "subtitle", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "nav", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_NCard, {
        class: ["p-6 flex flex-col gap-2 text-center", _ctx.$props.class]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      if (_ctx.$slots.tips) {
        _push(`<div class="${ssrRenderClass([_ctx.showTips ? "opacity-100" : "opacity-0", "transition py-5 flex items-center gap-2 text-gray-400"])}">`);
        _push(ssrRenderComponent(_sfc_main$b, {
          icon: "carbon-idea",
          class: "text-xl flex-none"
        }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "tips", {}, null, _push, _parent);
        _push(ssrRenderComponent(_component_NButton, {
          icon: "carbon-edit",
          class: "flex-none",
          onClick: openInEditor
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Open in Editor `);
            } else {
              return [
                createTextVNode(" Open in Editor ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/components/NuxtExampleLayout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ role: "button" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("base/components/BaseButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const FancyButton_vue_vue_type_style_index_0_scoped_ebc43b4e_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseButton = __nuxt_component_1;
  _push(ssrRenderComponent(_component_BaseButton, mergeProps({ class: "fancy-button" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FancyButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ebc43b4e"]]);
const _sfc_main$1 = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: "black"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "ui-button",
        style: { color: __props.color }
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ui/components/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const useFoo = () => useState("foo", () => "foo");
const getBar = () => "bar";
const index_vue_vue_type_style_index_0_scoped_7a1c93b3_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const themeConfig = useRuntimeConfig().theme;
    const appConfig = useAppConfig();
    const foo = useFoo();
    const bar = getBar();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtExampleLayout = _sfc_main$4;
      const _component_BaseButton = __nuxt_component_1;
      const _component_FancyButton = __nuxt_component_2;
      const _component_UIButton = __nuxt_component_3;
      _push(ssrRenderComponent(_component_NuxtExampleLayout, mergeProps({
        repo: "nuxt/examples",
        example: "advanced/config-extends"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` appConfig: <pre data-v-7a1c93b3${_scopeId}>${ssrInterpolate(JSON.stringify(unref(appConfig), null, 2))}</pre> runtimeConfig: <pre data-v-7a1c93b3${_scopeId}>${ssrInterpolate(JSON.stringify(unref(themeConfig), null, 2))}</pre>`);
            _push2(ssrRenderComponent(_component_BaseButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Base Button`);
                } else {
                  return [
                    createTextVNode("Base Button")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FancyButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Fancy Button`);
                } else {
                  return [
                    createTextVNode("Fancy Button")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UIButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`UI Button`);
                } else {
                  return [
                    createTextVNode("UI Button")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-7a1c93b3${_scopeId}> ${ssrInterpolate(unref(foo))} ${ssrInterpolate(unref(bar))} <br data-v-7a1c93b3${_scopeId}> ${ssrInterpolate(_ctx.$myPlugin())}`);
          } else {
            return [
              createTextVNode(" appConfig: "),
              createVNode("pre", null, toDisplayString(JSON.stringify(unref(appConfig), null, 2)), 1),
              createTextVNode(" runtimeConfig: "),
              createVNode("pre", null, toDisplayString(JSON.stringify(unref(themeConfig), null, 2)), 1),
              createVNode(_component_BaseButton, null, {
                default: withCtx(() => [
                  createTextVNode("Base Button")
                ]),
                _: 1
              }),
              createVNode(_component_FancyButton, null, {
                default: withCtx(() => [
                  createTextVNode("Fancy Button")
                ]),
                _: 1
              }),
              createVNode(_component_UIButton, null, {
                default: withCtx(() => [
                  createTextVNode("UI Button")
                ]),
                _: 1
              }),
              createVNode("br"),
              createTextVNode(" " + toDisplayString(unref(foo)) + " " + toDisplayString(unref(bar)) + " ", 1),
              createVNode("br"),
              createTextVNode(" " + toDisplayString(_ctx.$myPlugin()), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a1c93b3"]]);
export {
  index as default
};
//# sourceMappingURL=index-a5a55b8e.js.map
