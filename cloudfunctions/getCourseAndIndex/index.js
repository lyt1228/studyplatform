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
  const courseData = await db.collection('courseinfo').field({
    id:true,
    c_name:true
  }).get()

  var courseAndIndex = courseData.data
  for (var i = 0; i < courseAndIndex.length; i++){
    const indexData = await db.collection('courseindex').where({
      c_id: courseAndIndex[i].id
    }).field({
      in_id:true,
      title:true
    }).get()
    courseAndIndex[i].index=indexData.data
  }

  var courseTitle = []
  var indexTitle = []
  for(var j = 0; j < courseAndIndex.length; j++){
    courseTitle[j]=courseAndIndex[j].c_name
    var indexitem = []
    for(var k = 0; k < courseAndIndex[j].index.length; k++){
      indexitem[k]=courseAndIndex[j].index[k].title
    }
    indexTitle[j]= indexitem
  }

  return {
    courseAndIndex,
    courseTitle,
    indexTitle
  }
}