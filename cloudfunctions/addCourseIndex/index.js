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
  db.collection('courseindex').add({
    data: {
      c_id: event.c_id,
      disc: event.disc,
      in_id: event.in_id,
      point: event.point,
      test:event.test,
      title:event.title
    }
  }).then(res => {
    resolve('success')
  })
})