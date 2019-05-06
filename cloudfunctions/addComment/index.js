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
exports.main = async (event, context) => new Promise((resolve, reject) => {
  db.collection('commentinfo').add({
    data: {
      c_id: event.c_id,
      content: event.content,
      name: event.name,
      time: event.time,
      id: event.id
    }
  }).then(res => {
    resolve('success')
  })
})