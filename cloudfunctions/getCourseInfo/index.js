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
    id : event.c_id
  }).field({
    c_Intro: false,
    c_comment:false,
    c_index:false
  }).get()

  const data = courseData.data[0]
  // var indextitle = []
  
  // for(var i = 0; i < data.c_index.length; i++){
  //   var indexitem = {
  //     id: i,
  //     title: data.c_index[i].title,
  //     c_id: data.id
  //   }
  //   indextitle[i] = indexitem
  // }

const indexData = await db.collection('courseindex').where({
  c_id : event.c_id
}).field({
  c_id:true,
  in_id:true,
  title:true
}).get()

  return {
    _id:data._id,
    c_name:data.c_name,
    c_outline:data.c_outline,
    c_index:indexData.data
  }
}