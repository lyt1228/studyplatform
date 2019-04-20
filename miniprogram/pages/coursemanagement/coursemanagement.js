// miniprogram/pages/coursemanagement/coursemanagement.js
Page({

  data: {
    showModal1: false,
    showModal2: false,
    showModal3: false
  },

  submit1: function () {
    this.setData({
      showModal1: true
    })
  },
  submit2: function () {
    this.setData({
      showModal2: true
    })
  },
  submit3: function () {
    this.setData({
      showModal3: true
    })
  },

  preventTouchMove: function () {

  },


  go: function () {
    this.setData({
      showModal1: false,
      showModal2: false,
      showModal3: false
    })
  }

})