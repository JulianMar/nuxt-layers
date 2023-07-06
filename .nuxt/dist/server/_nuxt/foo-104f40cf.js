import { useSSRContext } from "vue";
import "vue-router";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
const _imports_0 = "" + __buildAssetsURL("Rectangle.22ebf22b.png");
const _sfc_main = {
  __name: "foo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}> Hello from extended page ! <img${ssrRenderAttr("src", _imports_0)}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("base/pages/foo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=foo-104f40cf.js.map
