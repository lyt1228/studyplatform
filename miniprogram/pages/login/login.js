// miniprogram/pages/login/login.js
var app = getApp();
wx.cloud.init()
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
    const logindata =''
    const loginerr =''
    wx.cloud.callFunction({
      name: 'login',
      data: {
        account: this.data.username,
        psw: this.data.password
      }
    }).then(res =>{
      loginerr: JSON.stringify(res.err,null,2)
    })

    wx.showToast({
      title: loginerr,
    })
    // wx.switchTab({
    //     url: '../users/users'
    //  })

  },  
  

  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  }
})