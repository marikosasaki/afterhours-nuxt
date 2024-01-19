import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
import "klona";
import "devalue";
const _imports_0 = "" + __buildAssetsURL("about.nKaEBD7m.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding" }, _attrs))} data-v-67053315><div class="container" data-v-67053315><div class="row" data-v-67053315><div class="col-md-12" data-v-67053315><h1 class="inner-title" data-v-67053315>about me</h1></div><div class="col-md-4 left-colum" data-v-67053315><img${ssrRenderAttr("src", _imports_0)} alt="about" width="100%" data-v-67053315></div><div class="col-md-8 right-colum" data-v-67053315><p data-v-67053315> コーダーとして働いて10年目になります。<br data-v-67053315> 趣味はヨガ。とweb周りの諸々の勉強 。<br data-v-67053315> nuxt.jsの勉強のため、このサイトを作成。<br data-v-67053315> NUXT２から3に乗り換えました。<br data-v-67053315> 効率を考えることで、家事で仕事も生活も楽しくしたい！！ と、思っている。。。<br data-v-67053315> 2児の母となりました。<br data-v-67053315> 北海道函館市出身<br data-v-67053315></p><p data-v-67053315> 最近、ゼルダから恐怖に打ち勝ち目標を達成する喜びを学ぶ。 <br data-v-67053315>おかげさまで、nuxt2から乗り換えの際の怒涛のエラーを解消し、 このHPを作成することができましたw w w </p><p data-v-67053315> 今後の目標、フロントエンドの知識と経験のUPと、体力づくり、忘備録用のブログを再開すること 子供の知育ゲームをNEXTで作る！！ </p></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-67053315"]]);
export {
  about as default
};
//# sourceMappingURL=about-9ZfPCWn3.js.map
