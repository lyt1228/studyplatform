// miniprogram/pages/coursemanagement/coursemanagement.js
Page({

  data: {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    c_name: ['医学数据挖掘与决策支持', '医学图像处理', '医学信息学', '医院信息管理'],
  
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
      showModal3: false,
     
    })
  },
  selectfilesrc:function(){

  },
  bindPickerChange(e) {
    
    this.setData({
      index: e.detail.value
    })
  },

})