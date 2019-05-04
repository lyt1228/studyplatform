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
  const indexAll = await db.collection('courseinfo').where({
    _id: event.courseid
  }).field({
    c_index:true
  }).get()
  var index = indexAll.data[0].c_index[parseInt(event.indexid)]
  return {
    index
  }
}