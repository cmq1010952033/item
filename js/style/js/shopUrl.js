webpackJsonp([27],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*************
 * 
 * 
 * @ 将所有的url 放在这个js 文件中 ，便于管理
 * 
 * 
 * 
 *************/
//用来存储头部 url 的对象

var headerObj = {
      login: '/view/login/index.html', //登陆地址
      register: 'javascript:;', // 注册地址
      ctiy: 'javascript:;', //切换城市
      order: 'javascript:;', //订单地址
      cart: '/view/cart/index.html', //购物车地址
      personal: '/view/personal/index.html', //个人中心 
      vip: '/view/personal/index.html', //vip 客户中心
      phoneShop: 'javascript:;' //手机商城
};
//用来储存 Nav url 的对象
var navObj = {
      index: '/view/index.html', //首页
      zfcg: 'javascript:void(0)', //政府采购
      qycg: 'javascript:void(0)', //企业采购
      cjcg: 'javascript:void(0)', //场景采购
      wyyx: '/view/wy/index.html', //网易严选
      abuot: '/view/enterprise/index.html', //关于我们
      jmzs: 'javascript:void(0)' //加盟招商
};
// 页面内用到的 url
var indexObj = {
      classlist: '/view/classlist/index.html', //商品列表
      details: '/view/details/index.html' //商品详情

};
sessionStorage.setItem('headerObj', JSON.stringify(headerObj));
sessionStorage.setItem('navObj', JSON.stringify(navObj));
sessionStorage.setItem('indexObj', JSON.stringify(indexObj));

/***/ })

},[2]);