// miniprogram/pages/course/course.js
Page({
  data: {
    c_index:[],
    showModal:false,
        
  },
  gototest:function(){
    
  },
  releknow:function(){
    this.setData({
      showModal:true
    })
  },
  close:function(){
    this.setData({
      showModal: false
    })
  },

  onLoad:function(options){
    wx.cloud.callFunction({
      name:'getCourse',
      data:{
        courseid:options.courseid,
        indexid:options.indexid
      }
    }).then(res =>{
      this.setData({c_index: [res.result.index]})
    })
  }
})