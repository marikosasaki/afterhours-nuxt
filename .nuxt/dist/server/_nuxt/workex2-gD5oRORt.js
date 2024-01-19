import { _ as __nuxt_component_0 } from "./WorkexInner-U1LnwHyU.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./WorkList-2BvRpmKd.js";
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
      mywork: "DESIGN・CODEING",
      myTitle: "長岡高速印刷様HPリニューアル",
      myNote: "HPのリニューアルに伴い全面改築",
      mySkill: ["scss", "html5", "javascript", "Wordpress", "Photoshop"],
      myImage: "/assets/image/portforio2.png",
      siteUrl: "https://www.kousoku-print.jp/",
      myIndex: "workex2"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WorkexInner = __nuxt_component_0;
  _push(`<!--[--> 　<div>`);
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
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/workex2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const workex2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  workex2 as default
};
//# sourceMappingURL=workex2-gD5oRORt.js.map
