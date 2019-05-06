// 云函数入口文件
const cloud = require('wx-server-sdk')

// 初始化 cloud 
cloud.init({
  env: 'studytest1-0726c8'
})

const db = cloud.database({
  env: 'studytest1-0726c8'
})


// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const comment = await db.collection('commentinfo').where({
    c_id: event.c_id
  }).field({
    c_id:false
  }).get()
  var commentData = comment.data
  for(var i = 0; i < commentData.length; i++){
    var recommentitem = await db.collection('recommentinfo').where({
      commentid: commentData[i]._id
    }).field({
      commentid: false
    }).get()
    commentData[i].recommentData = recommentitem.data
  }

  return {
    commentData
  }
}