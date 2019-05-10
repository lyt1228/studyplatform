// miniprogram/pages/course/course.js
var app = getApp()
Page({
  data: {
    c_index:[],
    showModal:false,
    content:'',
    c_id:'',
    relaknow:[]    
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
    wx.cloud.callFunction({
      name:'getRelakonw',
      data:{
        r_inid:this.data.c_index.in_id
      }
    }).then(res =>{
      this.setData({
        showModal: true,
        relaknow:res.result.relaData.data
      })
    })
  },
  close:function(){
    this.setData({
      showModal: false
    })
    // wx.redirectTo({ url: "../course/course?courseid="+this.data.c_index[0].c_id+"&indexid="+this.data.c_index[0].in_id })
  },

  onLoad:function(options){
    this.setData({c_id:options.courseid})
    wx.cloud.callFunction({
      name:'getCourse',
      data:{
        indexid:options.indexid
      }
    }).then(res =>{
      this.setData({c_index: res.result.data})
    })
  },

  commentContent:function(event){
    this.setData({ content: event.detail.value })
  },

  comment:function(){
    wx.cloud.callFunction({
      name: 'addComment',
      data: {
        c_id: this.data.c_id,
        content: this.data.content,
        name: app.appData.userData.name,
        time: app.getTime(),
        id: app.appData.userData.account
      }
    }).then(res => {
      wx.showToast({
        title: '留言成功',
      })
    })
  }
})