import { _ as __nuxt_component_0 } from './WorkexInner-5rWFGAKN.mjs';
import { useSSRContext } from 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../renderer.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/h3/dist/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/devalue/index.js';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/ufo/dist/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/destr/dist/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/hookable/dist/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/scule/dist/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/klona/dist/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/defu/dist/defu.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/pathe/dist/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/unhead/dist/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/@unhead/shared/dist/index.mjs';
import './WorkList-HritL3rU.mjs';
import './nuxt-link-IzlaOwBm.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/unctx/dist/index.mjs';
import 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  data() {
    return {
      mywork: "CODEING",
      myTitle: "\u602A\u76D7\u30ED\u30EF\u30A4\u30E4\u30EB",
      myNote: "DENA\u306E\u30D6\u30E9\u30A6\u30B6\u30B2\u30FC\u30E0\u306E\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u65B0\u898F\u30B2\u30FC\u30E0\u306E\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306A\u3069\u62C5\u5F53",
      mySkill: ["scss", "html5", "javascript", "angure.js"],
      myImage: "/assets/image/portforio1.png",
      siteUrl: "",
      myIndex: "workex1"
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
    index: $data.myIndex,
    style: _ctx.style
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/workex1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const workex1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { workex1 as default };
//# sourceMappingURL=workex1-ZcmeaSMo.mjs.map
