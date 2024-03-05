"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      arr1: [
        { id: 1, doc_name: "zyp", photo: "", position: "主任", address: "guanzhou", good: "asda" },
        { id: 2, doc_name: "zyp", photo: "", position: "主任", address: "guanzhou", good: "asda" },
        { id: 3, doc_name: "zyp", photo: "", position: "主任", address: "guanzhou", good: "asda" },
        { id: 4, doc_name: "zyp", photo: "", position: "主任", address: "guanzhou", good: "asda" },
        { id: 5, doc_name: "zyp", photo: "", position: "主任", address: "guanzhou", good: "asda" }
      ],
      arr2: [
        { id: 1, doc_name: "zyp", photo: "", position: "主任", address: "guanzhou", good: "asda" },
        { id: 2, doc_name: "zyp", photo: "", position: "主任", address: "guanzhou", good: "asda" },
        { id: 3, doc_name: "zyp", photo: "", position: "主任", address: "guanzhou", good: "asda" },
        { id: 4, doc_name: "zyp", photo: "", position: "主任", address: "guanzhou", good: "asda" },
        { id: 5, doc_name: "zyp", photo: "", position: "主任", address: "guanzhou", good: "asda" }
      ],
      list1: [
        { id: 1, name: "失眠" },
        { id: 2, name: "月经不调" },
        { id: 3, name: "早泄" },
        { id: 4, name: "痘痘" },
        { id: 5, name: "客户尽快" },
        { id: 6, name: "3为" },
        { id: 7, name: "阿三大王" },
        { id: 8, name: "撒旦撒" }
      ],
      list2: [
        { id: 1, name: "aa" },
        { id: 2, name: "bb" },
        { id: 3, name: "cc" },
        { id: 4, name: "dd" },
        { id: 5, name: "ee" },
        { id: 6, name: "ff" },
        { id: 7, name: "gg" },
        { id: 8, name: "hh" }
      ],
      consults: [
        { id: 1, title: "编译成功。前端运行日志，请另行在小程序开发工具的控制台查看", from: "每日健康", img_url: "../../static/logo.png" },
        { id: 2, title: "编译成功。前端运行日志，请另行在小程序开发工具的控制台查看", from: "每日健康", img_url: "../../static/logo.png" },
        { id: 3, title: "编译成功。前端运行日志，请另行在小程序开发工具的控制台查看", from: "每日健康", img_url: "../../static/logo.png" },
        { id: 4, title: "编译成功。前端运行日志，请另行在小程序开发工具的控制台查看", from: "每日健康", img_url: "../../static/logo.png" },
        { id: 5, title: "编译成功。前端运行日志，请另行在小程序开发工具的控制台查看", from: "每日健康", img_url: "../../static/logo.png" }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list1, (item, index, i0) => {
      return {
        a: common_vendor.t($data.list1[index].name),
        b: common_vendor.t($data.list2[index].name),
        c: item.id
      };
    }),
    b: common_vendor.f($data.arr1, (item, index, i0) => {
      return {
        a: common_vendor.t($data.arr1[index].doc_name),
        b: common_vendor.t($data.arr1[index].position),
        c: common_vendor.t($data.arr1[index].address),
        d: common_vendor.t($data.arr1[index].good),
        e: common_vendor.t($data.arr2[index].doc_name),
        f: common_vendor.t($data.arr2[index].position),
        g: common_vendor.t($data.arr2[index].address),
        h: common_vendor.t($data.arr2[index].good),
        i: item.id
      };
    }),
    c: common_vendor.f($data.consults, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.from),
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/chuangyue/front/chuangyue/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
