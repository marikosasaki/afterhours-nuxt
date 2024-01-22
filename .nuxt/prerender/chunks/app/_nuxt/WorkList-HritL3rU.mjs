import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-IzlaOwBm.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/sasakimariko/afterhours-vue/nuxt-app/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + buildAssetsURL("portforio7._hceOIHZ.png");
const _imports_1 = "" + buildAssetsURL("portforio2.jNvGBMXQ.png");
const _imports_2 = "" + buildAssetsURL("portforio3.I51QQuMe.png");
const _imports_3 = "" + buildAssetsURL("portforio1.1gkixOdi.png");
const _imports_4 = "" + buildAssetsURL("portforio4.oPJDS2NT.png");
const _imports_5 = "" + buildAssetsURL("portforio5.GP9M090w.png");
const _imports_6 = "" + buildAssetsURL("portforio6.QRpR7wDB.png");
const _sfc_main = {
  props: ["page"],
  data() {
    return {
      isActive: this.test()
    };
  },
  methods: {
    test: function() {
      if (this.$route.name == "index" || this.$route.name == "work") {
        return true;
      } else {
        return false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({
    class: ["work-list row col-8 mx-auto", { "col-10": $data.isActive }]
  }, _attrs))} data-v-bbb32c9b>`);
  if ($props.page != "workex7" && _ctx.$route.name != "index") {
    _push(`<li class="col-lg-4 fade-in-item" data-v-bbb32c9b>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "workex7",
      class: ""
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-bbb32c9b${_scopeId}>`);
        } else {
          return [
            createVNode("img", { src: _imports_0 })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.page != "workex2") {
    _push(`<li class="col-lg-4 fade-in-item" data-v-bbb32c9b>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "workex2",
      class: ""
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_1)} data-v-bbb32c9b${_scopeId}>`);
        } else {
          return [
            createVNode("img", { src: _imports_1 })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.page != "workex3") {
    _push(`<li class="col-lg-4 fade-in-item" data-v-bbb32c9b>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "workex3",
      class: ""
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_2)} data-v-bbb32c9b${_scopeId}>`);
        } else {
          return [
            createVNode("img", { src: _imports_2 })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.page != "workex1") {
    _push(`<li class="col-lg-4 fade-in-item" data-v-bbb32c9b>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "workex1",
      class: ""
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_3)} data-v-bbb32c9b${_scopeId}>`);
        } else {
          return [
            createVNode("img", { src: _imports_3 })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$route.name != "index") {
    _push(`<li class="col-lg-4 fade-in-item" data-v-bbb32c9b>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "workex4",
      class: ""
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_4)} data-v-bbb32c9b${_scopeId}>`);
        } else {
          return [
            createVNode("img", { src: _imports_4 })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$route.name != "index") {
    _push(`<li class="col-lg-4 fade-in-item" data-v-bbb32c9b><img${ssrRenderAttr("src", _imports_5)} data-v-bbb32c9b></li>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$route.name != "index") {
    _push(`<li class="col-lg-4 fade-in-item" data-v-bbb32c9b><img${ssrRenderAttr("src", _imports_6)} data-v-bbb32c9b></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorkList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bbb32c9b"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=WorkList-HritL3rU.mjs.map
