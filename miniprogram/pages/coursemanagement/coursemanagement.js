// miniprogram/pages/coursemanagement/coursemanagement.js
var app = getApp()
wx.cloud.init()
Page({

  data: {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    c_name: ['医学数据挖掘与决策支持', '医学图像处理', '医学信息学', '医院信息管理'],
    index: 0,
    coursename:'',
    courseid:'',
    courseintro:'',
    courseoutline:'',

    indexCourseId:'',
    indextitle:'',
    indexid:'',
    indexpoint:'',
    indexdisc:'',
    indextest:'',

    courseAndIndex:[],
    courseTitle:[],
    indexTitle:[],

    targetmultiArray: [
    ],
    relamultiArray: [
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
    this.getCourseAndIndexData()
    this.setData({
      showModal2: true
    })
  },
  submit3: function() {
    this.getCourseAndIndexData()
    this.setData({
      showModal3: true
    })
  },
  submit4: function() {
    this.getCourseAndIndexData()
    this.setData({
      showModal4: true
    })
  },

  preventTouchMove: function() {

  },

  onLoad:function(){
    this.getCourseAndIndexData()
  },
  selectfilesrc: function() {

  },
  bindPickerChange: function(e) {

    this.setData({
      index: e.detail.value,
      indexCourseId: this.data.courseAndIndex[e.detail.value].id
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
        data.targetmultiArray[1] = this.data.indexTitle[data.targetmultiIndex[0]]
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
        data.relamultiArray[1] = this.data.indexTitle[data.relamultiIndex[0]]
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
  
  coursenameInput: function(event){
    this.setData({ coursename: event.detail.value})
  },

  courseidInput: function (event) {
    this.setData({ courseid: event.detail.value })
  },

  courseintroInput: function (event) {
    this.setData({ courseintro: event.detail.value })
  },

  courseoutlineInput: function (event) {
    this.setData({ courseoutline: event.detail.value })
  },

  submitCourse:function(){
    wx.cloud.callFunction({
      name: 'addCourse',
      data: {
        c_name: this.data.coursename,
        id: this.data.courseid,
        c_Intro: this.data.courseintro,
        c_outline: this.data.courseoutline
      }
    }).then(res => {
      this.setData({showModal1:false})
      wx.showToast({
        title: '提交成功',
      })
    })
  },

  indextitleInput:function(event){
    this.setData({ indextitle: event.detail.value })
  },

  indexidInput: function (event) {
    this.setData({ indexid: event.detail.value })
  },

  indexpointInput: function (event) {
    this.setData({ indexpoint: event.detail.value })
  },

  indexdiscInput: function (event) {
    this.setData({ indexdisc: event.detail.value })
  },

  indextestInput: function (event) {
    this.setData({ indextest: event.detail.value })
  },

  submitIndex:function(){
    wx.cloud.callFunction({
      name: 'addCourseIndex',
      data: {
        c_id: this.data.indexCourseId,
        disc: this.data.indexdisc,
        in_id: this.data.indexid,
        point: this.data.indexpoint,
        test: this.data.indextest,
        title: this.data.indextitle
      }
    }).then(res => {
      this.setData({ showModal2: false })
      wx.showToast({
        title: '提交成功',
      })
    })
  },

  getCourseAndIndexData: function(){
    wx.cloud.callFunction({
      name:'getCourseAndIndex',
      data:{

      }
    }).then(res =>{
      this.setData({
        courseAndIndex:res.result.courseAndIndex,
        courseTitle: res.result.courseTitle,
        indexTitle: res.result.indexTitle,
        targetmultiArray: [
          this.data.courseTitle,
          this.data.indexTitle[0]
        ],
        relamultiArray: [
          this.data.courseTitle,
          this.data.indexTitle[0]
        ],
      })
    })
  
  },

  submitRelakonw: function(){
    var r_course = this.data.courseAndIndex[this.data.relamultiIndex[0]]
    var r_index = r_course.index[this.data.relamultiIndex[1]]
    var t_course = this.data.courseAndIndex[this.data.targetmultiIndex[0]]
    var t_index = t_course.index[this.data.targetmultiIndex[1]]
    wx.cloud.callFunction({
      name: 'addRelakonw',
      data: {
        r_cname: r_course.c_name,
        r_inid: r_index.in_id,
        r_inname: r_index.title,
        rc_id: r_course.id,
        t_cname: t_course.c_name,
        t_inid: t_index.in_id,
        t_inname: t_index.title,
        tc_id: t_course.id
      }
    }).then(res => {
      this.setData({ showModal4: false })
      wx.showToast({
        title: '提交成功',
      })
    })
  }

})