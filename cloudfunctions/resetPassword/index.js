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
  db.collection('userinfo').doc(event._id).update({
    data: {
      psw:event.psw
    }
  }).then(res => {
    resolve('success')
  })
})