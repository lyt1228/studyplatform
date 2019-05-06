// miniprogram/pages/course/course.js
Page({
  data: {
    c_index:[],
    showModal:false,
        
  },
  gototest:function(){
    
      wx.navigateToMiniProgram({
        appId: 'wxd947200f82267e58',
        path: 'pages/wjxqList/wjxqList?activityId=31221299',
        extraData: {
          foo: 'bar'
        },
        envVersion: 'develop',
        success(res) {
          console.log("打开成功")
        }
      })
    
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