import { _ as __nuxt_component_0 } from './WorkexInner-5rWFGAKN.mjs';
import { useSSRContext } from 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/vue/server-renderer/index.mjs';
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
      mywork: "DESIGN\u30FBCODEING",
      myTitle: "\u9577\u5CA1\u9AD8\u901F\u5370\u5237\u69D8HP\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB",
      myNote: "HP\u306E\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\u306B\u4F34\u3044\u5168\u9762\u6539\u7BC9",
      mySkill: ["scss", "html5", "javascript", "Wordpress", "Photoshop"],
      myImage: "/assets/image/portforio2.png",
      siteUrl: "https://www.kousoku-print.jp/",
      myIndex: "workex2"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WorkexInner = __nuxt_component_0;
  _push(`<!--[--> \u3000<div>`);
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

export { workex2 as default };
//# sourceMappingURL=workex2-4JLcNgzb.mjs.map
