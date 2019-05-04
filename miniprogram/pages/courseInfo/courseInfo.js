// miniprogram/pages/courseInfo/courseInfo.js
Page({

  data: {
    showModal:false,
    status: '1',
    
    // courseinfolistItems:[{
    //   id:'c1',
    //   c_name:'《医学数据挖掘与决策支持》',
    //   c_intro:'',
    //   c_outline:'《医学数据挖掘与决策支持》是数据挖掘和医学相结合的交叉科学。本课程论述了数据挖掘的基本概念、基础知识以及在医药领域中的应用。本课程教学的目的和任务是在掌握计算机专业知识的基础上，了解医学数据挖掘与决策支持的基础知识，提高毕业生对医学信息的分析与处理能力，拓宽毕业生的就业途径，满足医药产业飞速发展对信息技术人才的需求。',
    //   c_index: [
    //     {title:"医学数据挖掘与决策分析绪论"},
    //     {
    //       title: "医学数据仓库概述"
    //     }]
    // }],
    courseinfolistItems:[],
    comlistItems:[{
     name:'张三',
     time:'2019-4-27',
     content:'老师思路清晰，知识点讲述全面老师思路清晰',
     replylistItems:[
       {rename:"管理员",
       recontent:"谢谢同学的反馈"},
       ]
     }  
     ],
    

  },
  onLoad:function(options){
    wx.cloud.callFunction({
      name:'getCourseInfo',
      data:{
        _id:options._id
      }
    }).then(res =>{
      this.setData({courseinfolistItems: [res.result]})
      wx.setNavigationBarTitle({
        title: res.result.c_name,
      })
    })
   
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

  closemodal:function(){
    this.setData({
      showModal: false
    })
  }

})