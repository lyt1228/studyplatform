// miniprogram/pages/courseware/courseware.js
Page({


  data: {
    filelist:[{title:"医学数据挖掘与决策支持",fileId:"01"},{title:"医学图像处理",fileId:"02"},{title:"医学信息学"},{title:"医院信息系统"}],
    showModal:false


  },
  openfilelist:function(){
   this.setData({
     showModal: true
   })
  },
  closefile:function(){
    this.setData({
      showModal: false
    })
  },
  downloadfile:function(){
    wx.downloadFile({
      url: 'https://7374-studytest1-0726c8-1258776414.tcb.qcloud.la/运营工作介绍v1.pptx',
      success(res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath,
          success(res) {
            wx.showToast({
              title: '下载成功',
            })
          }
        })
      }
    })
  }
  
})