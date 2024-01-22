import { _ as __nuxt_component_0$2 } from "./nuxt-link-IzlaOwBm.js";
import { mergeProps, withCtx, createVNode, useSSRContext, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    to: "/",
    class: ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="fede-in--deley1 header-title"${_scopeId}>about my work</h1>`);
      } else {
        return [
          createVNode("h1", { class: "fede-in--deley1 header-title" }, "about my work")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MyLogo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  data() {
    return {
      isActive: false,
      count: 0
    };
  },
  methods: {
    menu: function() {
      if (this.isActive === true) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
      console.log(this.isActive);
    }
  },
  mounted: function() {
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MyLogo = __nuxt_component_0$1;
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["container", { "page-header": _ctx.$route.name != "index" }]
  }, _attrs))}><header class="wrapper clearfix">`);
  if (_ctx.$route.name != "index") {
    _push(ssrRenderComponent(_component_MyLogo, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([{ "menu-active": $data.isActive }, "menu-toggle"])}"><div class="menu-hamburger"></div></div><div class="${ssrRenderClass([{ "global-menu--active": $data.isActive }, "global-menu"])}"><div class="global-menu__container fade-in-item"><div class="global-menu__ttl">MENU</div><nav><ul class="menu-list"><li class="bounce-in1">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`top`);
      } else {
        return [
          createTextVNode("top")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="bounce-in2">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "about",
    class: "hover1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`about`);
      } else {
        return [
          createTextVNode("about")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="bounce-in3">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "work",
    class: "hover1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`work`);
      } else {
        return [
          createTextVNode("work")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div><div id="menu-bg" class="menu-bg"></div></div></header></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GlovalHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      isActive: false,
      count: 0
    };
  },
  methods: {
    menu: function() {
      if (this.isActive === true) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
      console.log(this.isActive);
    }
  },
  mounted: function() {
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="container"><nav><div class="row"><div class="col-md-12"><ul class="footer-list"><li class="">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "hover1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`top`);
      } else {
        return [
          createTextVNode("top")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "about",
    class: "hover1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`about`);
      } else {
        return [
          createTextVNode("about")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "work",
    class: "hover1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`work`);
      } else {
        return [
          createTextVNode("work")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p class="copy">© 2019 · Mariko Sasaki · All Rights Reserved</p></div></div></nav></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GlovalFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      title: "my portforio!",
      name: "mariko sasaki",
      hid: ""
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        {
          hid: "description",
          name: this.name,
          content: "My custom description"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_GlovalHeader = __nuxt_component_0;
  const _component_GlovalFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-cd135bcb>`);
  _push(ssrRenderComponent(_component_GlovalHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_GlovalFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cd135bcb"]]);
export {
  _default as default
};
//# sourceMappingURL=default--VbzYCcb.js.map
