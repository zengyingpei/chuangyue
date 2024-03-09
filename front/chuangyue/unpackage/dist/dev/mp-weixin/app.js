"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const common_js_utils = require("./common/js/utils.js");
const store_index = require("./store/index.js");
require("./store/modules/user.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/my/my.js";
  "./pages/message/message.js";
  "./pages/shop/shop.js";
  "./pages/medicine/medicine.js";
  "./pages/keep_medicine/keep_medicine.js";
  "./pages/about/about.js";
  "./pages/login/login.js";
  "./pages/text/text.js";
  "./pages/my/update_user_message.js";
  "./pages/questionnaire/questionnaire.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  globalData: {
    utils: common_js_utils.Utils
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/chuangyue/front/chuangyue/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
