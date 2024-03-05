"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      section1: [
        { id: 1, img: "../../static/icons/bag.svg", title: "待付款" },
        { id: 2, img: "../../static/icons/clock.svg", title: "待发货" },
        { id: 3, img: "../../static/icons/rocket.svg", title: "待收货" },
        { id: 4, img: "../../static/icons/like.svg", title: "待评价" },
        { id: 5, img: "../../static/icons/shouhou.svg", title: "退款/售后" }
      ],
      section2: [
        { id: 1, img: "../../static/icons/geolocalizator.svg", title: "收货地址" },
        { id: 2, img: "../../static/icons/capsules.svg", title: "我的处方" },
        { id: 3, img: "../../static/icons/yuyue.svg", title: "我的预约" },
        { id: 4, img: "../../static/icons/shouhou.svg", title: "我的评价" },
        { id: 5, img: "../../static/icons/hh.svg", title: "就诊人管理" },
        { id: 6, img: "../../static/icons/bingli.svg", title: "我的病例" },
        { id: 7, img: "../../static/icons/bell.svg", title: "就诊提醒" },
        { id: 8, img: "../../static/icons/record.svg", title: "就诊记录" }
      ],
      section3: [
        { id: 1, img: "../../static/icons/like.svg", title: "我的收藏" },
        { id: 2, img: "../../static/icons/huiyuan.svg", title: "我的会员" },
        { id: 3, img: "../../static/icons/quan.svg", title: "优惠券" },
        { id: 4, img: "../../static/icons/question.svg", title: "常见问题" },
        { id: 5, img: "../../static/icons/kefu.svg", title: "在线客服" },
        { id: 6, img: "../../static/icons/bg-question.svg", title: "关于" }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.section1, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: item.id
      };
    }),
    b: common_vendor.f($data.section2, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: item.id
      };
    }),
    c: common_vendor.f($data.section3, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f1ef635"], ["__file", "D:/chuangyue/front/chuangyue/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
