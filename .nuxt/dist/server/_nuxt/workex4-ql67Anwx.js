import { _ as __nuxt_component_0 } from "./WorkexInner-5rWFGAKN.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./WorkList-HritL3rU.js";
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
const _sfc_main = {
  data() {
    return {
      mywork: "CODEING",
      myTitle: "ふるさと納税ガイド",
      myNote: "全ページコーディング",
      mySkill: ["ruby.on.rails", "javascript", "haml"],
      myImage: "/assets/image/portforio4.png",
      siteUrl: "",
      myIndex: "workex4"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WorkexInner = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WorkexInner, {
    work: $data.mywork,
    title: $data.myTitle,
    note: $data.myNote,
    skills: $data.mySkill,
    image: $data.myImage,
    url: $data.siteUrl,
    index: $data.myIndex,
    style: _ctx.style
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/workex4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const workex4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  workex4 as default
};
//# sourceMappingURL=workex4-ql67Anwx.js.map
