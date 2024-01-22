import { _ as __nuxt_component_0 } from "./WorkList-HritL3rU.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-IzlaOwBm.js";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "defu";
import "klona";
import "devalue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_WorkList = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-9b63ec19><div class="top" data-v-9b63ec19><div class="top-view" data-v-9b63ec19><section class="hero" data-v-9b63ec19><h1 class="title fede-in--deley1" data-v-9b63ec19>MARIKO SASAKI</h1><p class="fede-in--deley2" data-v-9b63ec19>about my work</p></section></div></div>`);
  _push(ssrRenderComponent(_component_WorkList, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9b63ec19"]]);
export {
  index as default
};
//# sourceMappingURL=index-nuWKTNL0.js.map
