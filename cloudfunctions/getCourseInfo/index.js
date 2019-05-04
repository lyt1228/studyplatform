// 云函数入口文件
const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  env: 'studytest1-0726c8'
})

const db = cloud.database({
  env: 'studytest1-0726c8'
})
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const courseData = await db.collection('courseinfo').where({
    _id : event._id
  }).field({
    c_Intro: false
  }).get()

  const data = courseData.data[0]
  var indextitle = []
  for(var i = 0; i < data.c_index.length; i++){
    var indexitem = {
      id: i,
      title: data.c_index[i].title,
      _id: data._id
    }
    indextitle[i] = indexitem
  }

  return {
    _id:data._id,
    c_name:data.c_name,
    c_outline:data.c_outline,
    c_comment:data.c_comment,
    c_index:indextitle
  }
}