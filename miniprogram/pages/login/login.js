// miniprogram/pages/login/login.js
var app = getApp();
Page({
  data: {
    username: null,
    password: null,
  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },

  onUnload: function () {

  },
  loginBtnClick: function () {
    // 用户名和密码验证的过程
    app.appData.userinfo = { username: this.data.username, password: this.data.password }
    wx.switchTab({
      url: '../users/users'
    })
  },

  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  }
})