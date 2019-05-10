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
  const relaData = await db.collection('relakonwinfo').where({
    r_inid: event.r_inid
  }).field({
    t_inid:true,
    t_inname:true,
    tc_id:true
  }).get()

  return {
    relaData
  }
}