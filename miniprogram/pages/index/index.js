//index.js
const app = getApp()
Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    courseimg:[
      '../../images/001.jpg',
      '../../images/002.jpg',
      '../../images/003.jpg',
      '../../images/004.jpg'
    ],

    listItems:[]
  },
  onLoad: function (options) {
    if (app.appData.userinfo == null) {
      // wx.navigateTo({url:"../login/login"})

     wx.redirectTo({ url: "../login/login" })
    } else {
      this.setData({ username: app.appData.userinfo.username })
      wx.cloud.callFunction({
        name:'getCourseIndex',
        data:{

        }
      }).then(res =>{
        var data = res.result.data
        var coursedata =[]
        for(var i = 0; i < data.length; i++){
          var itemdata = {
            id:data[i].id,
            className: data[i].c_name,
            classContent: data[i].c_Intro,
            courseimg:this.data.courseimg[i]
          }
          coursedata[i] = itemdata
        }
        this.setData({listItems : coursedata})
      })
    }
  }
})