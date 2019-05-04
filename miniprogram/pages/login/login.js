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

    wx.cloud.callFunction({
      name:'login',
      data:{
        account: parseInt(this.data.username),
        psw: parseInt(this.data.password)
      }
    }).then(res => {
    //  const logindata = res.result.data
      app.appData.userData = res.result.data
      const loginerr = res.result.err
      if (loginerr == 'login'){
        wx.switchTab({
          url: '../users/users'
        })
      } else {
        wx.showToast({
          title: loginerr
        })
      }
      
    })
  },  
  

  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  }
})