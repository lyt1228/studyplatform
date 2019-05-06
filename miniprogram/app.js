//app.js
App({
  onLaunch: function () {
    
  },
  onShow: function (options) {
    
  },

  onHide: function () {
    
  },

  appData: {
    userinfo: null,
    userData:[]
  },

  getTime: function(){
    var date = new Date(Date.parse(new Date()));
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

    return Y+"年"+M+"月"+D+"日"
  }
})

