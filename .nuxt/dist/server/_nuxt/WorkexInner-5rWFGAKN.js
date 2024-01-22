import { _ as __nuxt_component_0$1 } from "./WorkList-HritL3rU.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: ["work", "title", "note", "skills", "image", "url", "index"],
  data() {
    return {
      pagename: this.index,
      imgUrl: __buildAssetsURL(this.image)
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WorkList = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding" }, _attrs))} data-v-059b8878><div class="container mb-5" data-v-059b8878><div class="row" data-v-059b8878><div class="col-md-12 mb-5" data-v-059b8878><h1 class="inner-title" data-v-059b8878>${ssrInterpolate($props.work)}</h1><div class="title-3" data-v-059b8878>${ssrInterpolate($props.title)}</div></div><div class="col-md-12 fade-in-item project-wraper" data-v-059b8878><div class="mb-3" data-v-059b8878>${ssrInterpolate($props.note)}</div><ul class="project-tag mb-5" data-v-059b8878><!--[-->`);
  ssrRenderList($props.skills, (skill) => {
    _push(`<li data-v-059b8878>${ssrInterpolate(skill)}</li>`);
  });
  _push(`<!--]--></ul>`);
  if ($props.url) {
    _push(`<div class="mb-5" data-v-059b8878><a${ssrRenderAttr("href", $props.url)} target="_blank" rel="noopener noreferrer" data-v-059b8878>サイトを見る</a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="col-10 main-image" data-v-059b8878><img${ssrRenderAttr("src", $data.imgUrl)} data-v-059b8878></div></div></div></div><div class="title-wrapper col-md-12" data-v-059b8878><h2 class="inner-title" data-v-059b8878>other</h2></div>`);
  _push(ssrRenderComponent(_component_WorkList, { page: $data.pagename }, null, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorkexInner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-059b8878"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=WorkexInner-5rWFGAKN.js.map
