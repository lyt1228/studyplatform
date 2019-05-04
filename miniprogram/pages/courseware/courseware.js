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

  }
  
})