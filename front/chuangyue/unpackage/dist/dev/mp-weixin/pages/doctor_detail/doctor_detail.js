"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      doctorId: null,
      //接收上一个页面传过来的医生id
      doctorDetail: null
      //接收从后端获取的医生所有信息
    };
  },
  onLoad(option) {
    this.doctorId = option.doctorId;
    this.getDatas(this.doctorId);
  },
  methods: {
    getDatas(doctorId) {
      let token = common_vendor.index.getStorageSync("authorization");
      common_vendor.index.request({
        url: "http://localhost:8080/api/user/doctor/detail",
        method: "POST",
        data: {
          id: doctorId
        },
        header: {
          "authorization": token
        },
        success: (res) => {
          if (res.data.code == 1) {
            this.doctorDetail = res.data.data;
            console.log(res.data.data);
          } else {
            common_vendor.index.showToast({
              duration: 1e3,
              title: "数据加载失败",
              icon: "error"
            });
          }
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.doctorDetail.name),
    b: common_vendor.t($data.doctorDetail.level),
    c: common_vendor.f($data.doctorDetail.department, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    d: common_vendor.t($data.doctorDetail.workplace),
    e: common_vendor.t($data.doctorDetail.score),
    f: common_vendor.p({
      type: "hand-up-filled",
      color: "#7ca0ec"
    }),
    g: common_vendor.t($data.doctorDetail.specialization),
    h: common_vendor.t($data.doctorDetail.desc),
    i: common_vendor.t($data.doctorDetail.consultCost),
    j: common_vendor.t($data.doctorDetail.consultCost)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/chuangyue/front/chuangyue/pages/doctor_detail/doctor_detail.vue"]]);
wx.createPage(MiniProgramPage);
