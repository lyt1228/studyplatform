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
    // listItems: [{
    //   'className': '医学数据挖掘与决策支持',
    //   'classContent': '本课程旨在为全校非计算机专业学生介绍关于医学数据挖掘与决策支持的系统性概貌。课程内容包括从总体上介绍医学信息技术、数据仓库、数据挖掘、决策支持等医学数据挖掘与决策支持等各个相关的领域的基础知识，使学生了解实现医学数据挖掘与决策支持所需要的基本知识和原理，为以后的专业学习打下基础。', courseimg:'../../images/001.jpg'
    // }, {
    //   'className': '医学图像处理',
    //     'classContent': '本课程旨在为学生打下坚实的医学图像处理专业知识基础，掌握现代医学图象处理的内容、模式和发展趋势，为学生建立健全合理的知识结构创造良好的条件。课程主要内容包括 图像增强、图像运算、图像分割、图像变换等。通过本课程的学习，使学生掌握医学图象处理的基本概念、基本原理和基本方法，并在此基础上掌握医学图象处理的整体结构框架，逐渐形成观察、思考、分析和解决有关理论和实践问题的能力，提高学生为社会服务的能力。', courseimg: '../../images/002.jpg'
    // }, {
    //   'className': '医学信息学',
    //     'classContent': '本课程介绍医学信息学的概念和基本理论，包括数据、信息、知识以及信息管理，医学信息标准化和医学信息系统工程等。其次介绍医学信息学各个研究和应用领域，包括生物信息学，医学影像和实验室信息系统，医院信息系统，护理信息系统，电子病历，远程医疗，临床决策支持，社区卫生、区域卫生和公共卫生信息系统，医疗保险信息系统，中医领域的信息处理。最后介绍国际上医学信息学的发展方向、新的理论和技术，使学生了解实现医学信息化所需要的基本知识和原理，拓展专业视野，为以后的专业学习研究打下基础。', courseimg: '../../images/003.jpg'
    // }, {
    //   'className': '医学信息系统',
    //     'classContent': '本课程旨在为医学信息工程专业学生实际建设医院信息系统提供理论基础，同时结合软件工程的知识，完成医院信息系统基本模块的设计。课程主要内容包括医院信息系统概述，医院信息系统各子系统所要实现的目标、应该具备的基本功能及业务流程以及医院信息系统建设过程中应注意的问题。通过本课程学习使学生掌握医院信息系统分析和设计的基本思路和基本方法。', courseimg: '../../images/004.jpg'
    // }]

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
            _id:data[i]._id,
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