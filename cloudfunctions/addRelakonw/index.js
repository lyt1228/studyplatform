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
  db.collection('relakonwinfo').add({
    data: {
      r_cname: event.r_cname,
      r_inid: event.r_inid,
      r_inname: event.r_inname,
      rc_id: event.rc_id,
      t_cname: event.t_cname,
      t_inid: event.t_inid,
      t_inname: event.t_inname,
      tc_id: event.tc_id
    }
  }).then(res => {
    resolve('success')
  })
})