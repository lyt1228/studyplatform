// miniprogram/pages/users/users.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal:false,
    username: '',
    account: '',
    major: '',
    grade: '',
    isTeacher:false,
    oldpsw:'',
    newpsw:'',
  },
  jump: function () {
    this.setData({
      showModal: true
    })
  },
 

  back:function(){
    this.setData({
      showModal: false
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.appData.userinfo == null) {
      // wx.navigateTo({url:"../login/login"})

      wx.redirectTo({ url: "../login/login" })
    } else {
      this.setData({ 
        username: app.appData.userData.name,
        account: app.appData.userData.account,
        major: app.appData.userData.major,
        grade: app.appData.userData.class,
        })

    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  oldpswInput: function(event){
    this.setData({oldpsw: event.detail.value})
  },

  newpswInput: function (event) {
    this.setData({newpsw: event.detail.value})
  },

  back: function(){
    if(this.data.oldpsw == app.appData.userData.psw){
      wx.cloud.callFunction({
        name: 'resetPassword',
        data: {
          _id: app.appData.userData._id,
          psw: parseInt(this.data.newpsw)
        }
      }).then(res => {
        wx.showToast({
          title: '设置成功',
        })
        this.setData({
          showModal:false
        })
      })
    } else{
      wx.showToast({
        title: '密码错误',
      })
      this.setData({
        showModal: false
      })
    }
    
  }
})