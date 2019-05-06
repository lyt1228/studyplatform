// miniprogram/pages/coursemanagement/coursemanagement.js
Page({

  data: {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    c_name: ['医学数据挖掘与决策支持', '医学图像处理', '医学信息学', '医院信息管理'],
    index: 0,
    targetmultiArray: [
      ['医学数据挖掘与决策支持', '医学图像处理', '医学信息学', '医院信息管理'],
      ['章节一', '章节二', '章节三', '章节四']
    ],
    relamultiArray: [
      ['医学数据挖掘与决策支持', '医学图像处理', '医学信息学', '医院信息管理'],
      ['章节一', '章节二', '章节三', '章节四']
    ],
    targetmultiIndex: [0, 0],
    relamultiIndex: [0, 0],

  },

  submit1: function() {
    this.setData({
      showModal1: true
    })
  },
  submit2: function() {
    this.setData({
      showModal2: true
    })
  },
  submit3: function() {
    this.setData({
      showModal3: true
    })
  },
  submit4: function() {
    this.setData({
      showModal4: true
    })
  },

  preventTouchMove: function() {

  },


  go: function() {
    this.setData({
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
    })
  },
  selectfilesrc: function() {

  },
  bindPickerChange: function(e) {

    this.setData({
      index: e.detail.value
    })
  },
  bindtargetMultiPickerColumnChange: function(e) {

    var data = {
      targetmultiArray: this.data.targetmultiArray,
      targetmultiIndex: this.data.targetmultiIndex
    };
    data.targetmultiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.targetmultiIndex[0]) {
          case 0:
            data.targetmultiArray[1] = ['章节一', '章节二', '章节三', '章节四'];
            break;
          case 1:
            data.targetmultiArray[1] = ['章节1', '章节2', '章节3', '章节4'];
            break;
          case 2:
            data.targetmultiArray[1] = ['章节5', '章节6', '章节7', '章节8'];
            break;
          case 3:
            data.targetmultiArray[1] = ['章节9', '章节10', '章节11', '章节12'];
            break;

        }
        data.targetmultiIndex[1] = 0;
        break;
    }
    this.setData(data);
  },
  bindtargetMultiPickerChange: function(e) {

    this.setData({
      targetmultiIndex: e.detail.value
    })
  },
  bindrelaMultiPickerColumnChange: function(e) {

    var data = {
      relamultiArray: this.data.relamultiArray,
      relamultiIndex: this.data.relamultiIndex
    };
    data.relamultiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.relamultiIndex[0]) {
          case 0:
            data.relamultiArray[1] = ['章节一', '章节二', '章节三', '章节四'];
            break;
          case 1:
            data.relamultiArray[1] = ['章节1', '章节2', '章节3', '章节4'];
            break;
          case 2:
            data.relamultiArray[1] = ['章节5', '章节6', '章节7', '章节8'];
            break;
          case 3:
            data.relamultiArray[1] = ['章节9', '章节10', '章节11', '章节12'];
            break;

        }
        data.relamultiIndex[1] = 0;
        break;
    }
    this.setData(data);
  },
  bindrelaMultiPickerChange: function(e) {

    this.setData({
      relamultiIndex: e.detail.value
    })
  },
  


})