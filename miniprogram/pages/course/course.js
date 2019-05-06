// miniprogram/pages/course/course.js
Page({
  data: {
    // c_index: [{ title: "医学数据挖掘与决策分析绪论", disc: "1.什么是数据挖掘？\n2.数据仓库的基本特征是什么？", test: "", point:"1.掌握医学信息技术与医学知识的概念，医学决策支持系统的发展，数据仓库的基本特征、数据组织等;\n2.熟悉医学信息技术及决策支持系统的概念和数据仓库的基本概念；\n3.了解医学信息技术及决策支持系统的发展"}],
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