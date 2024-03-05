"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "quick-query",
  data() {
    return {};
  },
  props: {
    //父组件传一个info进来，是一个对象
    info: {
      type: String,
      default: "sadas"
    }
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/chuangyue/front/chuangyue/components/quick_query/quick_query.vue"]]);
wx.createComponent(Component);
