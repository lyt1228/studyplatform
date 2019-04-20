// miniprogram/pages/courseInfo/courseInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: '1',
    indexlist: [{ 'info': '章节一' },{ 'info': '章节二' },{ 'info': '章节三' },{ 'info': '章节四' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  showStatus: function (e) {
    let status = e.currentTarget.dataset.status;
    this.setData({
      status: status
    })
  }

})