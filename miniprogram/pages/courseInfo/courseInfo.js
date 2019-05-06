// miniprogram/pages/courseInfo/courseInfo.js
var app = getApp();
wx.cloud.init()
Page({

  data: {
    showModal:false,
    status: '1',
    c_id:'',
    courseinfolistItems:[],
    comlistItems:[],
    content:'',
  },
  onLoad:function(options){
    this.setData({c_id:options.c_id})
    wx.cloud.callFunction({
      name:'getCourseInfo',
      data:{
        c_id:options.c_id
      }
    }).then(res =>{
      this.setData({courseinfolistItems: [res.result]})
      wx.setNavigationBarTitle({
        title: res.result.c_name,
      })
    })
    this.getComment()
  },

  showStatus: function (e) {
    let status = e.currentTarget.dataset.status;
    this.setData({
      status: status
    })
  },

  reply:function(){
    this.setData({
      showModal:true
    })
  },

  closemodal:function(event){
    wx.cloud.callFunction({
      name:'replyComment',
      data:{
        commentid: event.currentTarget.dataset.commentid,
        content:this.data.content,
        username:app.appData.userData.name,
      }
    }).then(res =>{
      this.getComment()
    })
    this.setData({
      showModal: false
    })
  },

  getComment:function(){
    wx.cloud.callFunction({
      name:'getComments',
      data:{
        c_id:this.data.c_id
      }
    }).then(res =>{
      this.setData({comlistItems: res.result.commentData})
    })
  },

  replycontent: function(event){
    this.setData({ content: event.detail.value })
  }
})